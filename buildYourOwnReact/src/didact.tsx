//!Resouces:

//! This code is just the rewrite of the code present in the blog: https://pomb.us/build-your-own-react/
//! Additional Resources that I have used are for good grasp and better understading:

    //! https://zackargyle.github.io/react-internals-slides/#/?_k=vl2nvj

//! Below is the resource which was not able to understand in a single go, maybe need better understanding of React. Linking the resource, to read later on:
  // https://makersden.io/blog/look-inside-fiber

/* 
Fiber is the type which react uses to keep track of DOM changes
*/

// Fiber represents a unit of work that React tracks.
class Fiber {
  type: string | Function;
  props: Props;
  dom?: HTMLElement | Text | null;
  parent?: Fiber | null;
  child?: Fiber | null;
  sibling?: Fiber | null;
  alternate?: Fiber | null;
  hooks?: Hook[];
  effectTag?: "PLACEMENT" | "UPDATE" | "DELETION";

  constructor(type: string | Function, props: Props) {
    this.type = type;
    this.props = props;
  }
}

// Props type represents any possible properties for a fiber.
interface Props {
  [key: string]: any;
}

// Hook manages the state and actions for function components.
class Hook {
  state: any;
  queue: Function[];

  constructor(initialState: any) {
    this.state = initialState;
    this.queue = [];
  }
}

class DomUtils {

  static isEvent(key: string): boolean {
    return key.startsWith("on");
  }

  static isProperty(key: string): boolean {
    return key !== "children" && !this.isEvent(key);
  }

  static isNew(prev: Props, next: Props): (key: string) => boolean {
    return (key: string) => prev[key] !== next[key];
  }

  static isGone(prev: Props, next: Props): (key: string) => boolean {
    return (key: string) => !(key in next);
  }

  //!This function is updating the DOM element
  //!If any property/event listener form the perviousPros is no more useful then this code is removing them
  // if any new property/event have been added, they are adding them to the DOM.
  static updateDomElement( dom: HTMLElement | Text, prevProps: Props, nextProps: Props) {

    //!Removing event listeners all the event listeners that have been removed from the prevProps    
    Object.keys(prevProps)
      .filter(this.isEvent)
      .filter((key) => !(key in nextProps) || this.isNew(prevProps, nextProps)(key))
      .forEach((name) => {
        const eventType = name.toLowerCase().substring(2);
        dom.removeEventListener(eventType, prevProps[name]);
      });

    //!Removing dom properties that have gone from the previous properties
    Object.keys(prevProps)
      .filter(this.isProperty)
      .filter(this.isGone(prevProps, nextProps))
      .forEach((name) => {
        (dom as any)[name] = "";
      });


    //!Adding new poperties to the DOM element  
    Object.keys(nextProps)
      .filter(this.isProperty)
      .filter(this.isNew(prevProps, nextProps))
      .forEach((name) => {
        (dom as any)[name] = nextProps[name];
      });

    //!adding new event listener to the DOM element
    Object.keys(nextProps)
      .filter(this.isEvent)
      .filter(this.isNew(prevProps, nextProps))
      .forEach((name) => {
        const eventType = name.toLowerCase().substring(2);
        dom.addEventListener(eventType, nextProps[name]);
      });
  }

  static createDom(fiber: Fiber): HTMLElement | Text {
    const dom = fiber.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(fiber.type as string);
    this.updateDomElement(dom as HTMLElement, {}, fiber.props);
    return dom;
  }
}

// ReactElement represents the type of element in a virtual DOM.
class ReactElement {
  type: string | Function;
  props: Props;

  constructor(type: string | Function, props: Props) {
    this.type = type;
    this.props = props;
  }
}


//!Below is the function which basically converts JSX into FiberElement
function createElement( type: string | Function, props: Props | null, ...children: any[]): ReactElement {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}
  
function createTextElement(text: string): ReactElement {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
  
//!Rendering class
class Renderer {

  nextUnitOfWork: Fiber | null = null;
  currentRoot: Fiber | null = null;
  wipRoot: Fiber | null = null; // Work in progress root
  deletions: Fiber[] = [];
  wipFiber: Fiber | null = null;
  hookIndex: number  = 0;

  //!Methods

  render(re : ReactElement, container : HTMLElement) {
    this.wipRoot = new Fiber('', {children: [re]});
    this.wipRoot.dom = container
    this.wipRoot.alternate = this.currentRoot
    this.deletions = [];
    this.nextUnitOfWork = this.wipRoot;
  }

  //!This is the place where I am commiting root, means setting currentRoot in render tree
  commitRoot() {
    this.deletions.forEach(this.commitWork.bind(this));
    if (this.wipRoot?.child) this.commitWork(this.wipRoot.child);
    this.currentRoot = this.wipRoot
  }

  //!Must be called on root: Since we are recursively calling commitWork on child and sibbling
  commitWork(fiber : Fiber | null | undefined) {
    if (!fiber) return;

    //!Getting fiber node, whole parent has a dom.
    let fp = fiber.parent;
    while(fp && !fp.dom) {
      fp = fp.parent
    }

    const fpDom = fp?.dom;

    if (fiber.effectTag === "PLACEMENT" && fiber.dom) {
      fpDom?.appendChild(fiber.dom);
    } else if (fiber.effectTag === "UPDATE" && fiber.dom) {
      DomUtils.updateDomElement(fiber.dom, fiber.alternate!.props, fiber.props)
    } else if(fiber.effectTag === "DELETION") {
      this.commitDeletion(fiber, fpDom as HTMLElement)
    }

    this.commitWork(fiber.child)
    this.commitWork(fiber.sibling)
  }

  commitDeletion(fiber : Fiber, domParent : HTMLElement) {
    if (fiber.dom) {
      domParent.removeChild(fiber.dom)
    } else if(fiber.child) {  //!If no dom, call it on children
      this.commitDeletion(fiber.child, domParent)
    }
  }


  //!Basically it is trying to finish up the root and later on commit it. 
  workLoop(deadline: IdleDeadline) {
    let shouldYield = false;
    while (this.nextUnitOfWork && !shouldYield) {
      this.nextUnitOfWork = this.performUnitOfWork(this.nextUnitOfWork);
      shouldYield = deadline.timeRemaining() < 1;
    }

    //!No work left, so commit the root
    if (!this.nextUnitOfWork && this.wipRoot) {
      this.commitRoot();
    }

    requestIdleCallback(this.workLoop.bind(this));
  }

  performUnitOfWork(fiber : Fiber) : Fiber | null {
    const isFunctionComponent = fiber.type instanceof Function
    if (isFunctionComponent) {
      this.updateFunctionComponent(fiber);
    } else {
      this.updateHostComponent(fiber);
    }

    if(fiber.child) {
      return fiber.child
    }

    let nextFiber : Fiber | null | undefined = fiber
    while (nextFiber) {
      if (nextFiber.sibling) {
        return nextFiber.sibling
      }
      nextFiber = nextFiber!.parent
    }
    return null
  }

  updateFunctionComponent(fiber : Fiber) {
    this.wipFiber = fiber;
    this.hookIndex = 0;
    this.wipFiber.hooks = [];
    const children = [(fiber.type as Function)(fiber.props)]
    this.reconcileChildren(fiber, children)
  }

  updateHostComponent(fiber : Fiber) {
    if(!fiber.dom) {
      fiber.dom = DomUtils.createDom(fiber);
    }
    this.reconcileChildren(fiber, fiber.props.children)
  }

  reconcileChildren(wipFiber : Fiber, elements : ReactElement[]) {
    let index = 0;
    let oldFiber : Fiber | null | undefined = wipFiber.alternate?.child || null;
    let prevSibling: Fiber | null = null;

    while (index < elements.length || oldFiber !== null) {
      const element = elements[index];
      let newFiber: Fiber | null = null;

      const sameType = element?.type === oldFiber?.type;

      if (sameType) {
        newFiber = new Fiber(oldFiber!.type, element.props);
        newFiber.dom = oldFiber!.dom;
        newFiber.parent = wipFiber;
        newFiber.alternate = oldFiber;
        newFiber.effectTag = "UPDATE";
      }

      if (element && !sameType) {
        newFiber = new Fiber(element.type, element.props);
        newFiber.dom = null;
        newFiber.parent = wipFiber;
        newFiber.alternate = null;
        newFiber.effectTag = "PLACEMENT";
      }

      if (oldFiber && !sameType) {
        oldFiber.effectTag = "DELETION";
        this.deletions.push(oldFiber);
      }

      if (oldFiber) {
        oldFiber = oldFiber.sibling;
      }

      if (index === 0) {
        wipFiber.child = newFiber;
      } else if (element) {
        prevSibling!.sibling = newFiber;
      }

      prevSibling = newFiber;
      index++;
    }
  }

  useState<T>(initial: T): [T, (action: (prevState: T) => T) => void] {
    const oldHook = this.wipFiber?.alternate?.hooks?.[this.hookIndex ?? -1] ?? null;
    const hook = new Hook(oldHook ? oldHook.state : initial);
    const actions = oldHook ? oldHook.queue : [];

    actions.forEach((action) => { hook.state = action(hook.state); });

    const setState = (action: (prevState: T) => T) => {
      hook.queue.push(action);
      this.wipRoot = new Fiber('', { ...this.currentRoot!.props });
      this.wipRoot.dom = this.currentRoot!.dom!;
      this.nextUnitOfWork = this.wipRoot;
      this.deletions = [];
    };

    this.wipFiber?.hooks?.push(hook);
    this.hookIndex!++;
    return [hook.state, setState];
  }

}


//!Creating the render method
const rendererObj = new Renderer();
requestIdleCallback(rendererObj.workLoop.bind(rendererObj));

// Main class to handle the React-like rendering and lifecycle.
const Didact = {
  createElement,
  render : rendererObj.render,
  useState : rendererObj.useState,
};
  
/** @jsx Didact.createElement */
function Counter() {
  const [state, setState] = Didact.useState(1);
  return (
    <h1 onClick={() => setState(c => c + 1)}>
      Count: {state}
    </h1>
  );
}

const element = <Counter />;
const container = document.getElementById("root")!;
Didact.render(element, container);
  




