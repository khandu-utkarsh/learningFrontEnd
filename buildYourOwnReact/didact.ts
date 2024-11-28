
/* 
Fiber is the type which react uses to keep track of DOM changes
*/

interface Fiber {
    type: string | Function;
    props: Props;
    dom?: HTMLElement | Text | null;  //!Optional, so if not declared it will be undefined
    parent?: Fiber | null;
    child?: Fiber | null;
    sibling?: Fiber | null;
    alternate?: Fiber | null; //!I believe it is the older one  before the re-rendering computation happened.
    hooks?: Hook[];
    effectTag?: "PLACEMENT" | "UPDATE" | "DELETION";
  }
  
interface Props {
    [key: string]: any;
}
  
/*
This is a type of react element.
*/
interface FiberElement {
    type: string | Function;
    props: Props;
}
  
interface Hook {
    state: any;
    queue: Function[];
}
  
let nextUnitOfWork: Fiber | null = null;
let currentRoot: Fiber | null = null;
let wipRoot: Fiber | null = null;   //!wip stands for work in progress
let deletions: Fiber[] = [];
let wipFiber: Fiber | null = null;
let hookIndex: number | null = null;

function createElement( type: string | Function, props: Props | null, ...children: any[]): FiberElement {
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
  
function createTextElement(text: string): FiberElement {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createDom(fiber: Fiber): HTMLElement | Text {
  const dom = fiber.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(fiber.type as string);
  updateDom(dom as HTMLElement, {}, fiber.props);
  return dom;
}
  
const isEvent = (key: string) => key.startsWith("on");
const isProperty = (key: string) => key !== "children" && !isEvent(key);
const isNew = (prev: Props, next: Props) => (key: string) => prev[key] !== next[key];
const isGone = (prev: Props, next: Props) => (key: string) => !(key in next);
  
function updateDom(dom: HTMLElement | Text, prevProps: Props, nextProps: Props) {
  // Remove old or changed event listeners
  Object.keys(prevProps)
    .filter(isEvent)
    .filter(key => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach(
      name => {
      const eventType = name.toLowerCase().substring(2); 
      dom.removeEventListener(eventType, prevProps[name]);
    }
  );
  
  // Remove old properties
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach(
      name => {
      (dom as any)[name] = "";
    }
  );
  
  // Set new or changed properties
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach(
      name => {
      (dom as any)[name] = nextProps[name];
    }
  );
  
  // Add event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach(
      name => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    }
  );
}
  
function commitRoot() {
    deletions.forEach(commitWork);
    if (wipRoot?.child) commitWork(wipRoot.child);
    currentRoot = wipRoot;
    wipRoot = null;
}

function commitWork(fiber: Fiber | null | undefined) {
  if (!fiber) return;

  //!Basically isn't it trying to find the uppermost parent whose DOM element is not there and setting 
  // that as domParentFiber
  let domParentFiber = fiber.parent;
  while (domParentFiber && !domParentFiber.dom) {
    domParentFiber = domParentFiber.parent;
  }
  const domParent = domParentFiber?.dom;

  if (fiber.effectTag === "PLACEMENT" && fiber.dom) {
    domParent?.appendChild(fiber.dom);
  } else if (fiber.effectTag === "UPDATE" && fiber.dom) {
    updateDom(fiber.dom, fiber.alternate!.props, fiber.props);
  } else if (fiber.effectTag === "DELETION") {
    commitDeletion(fiber, domParent as HTMLElement);
  }

  commitWork(fiber.child);
  commitWork(fiber.sibling);
}
  
function commitDeletion(fiber: Fiber, domParent: HTMLElement) {
  if (fiber.dom) {
    domParent.removeChild(fiber.dom);
  } else if (fiber.child) {
    commitDeletion(fiber.child, domParent);
  }
}

function render(element: FiberElement, container: HTMLElement) {
  wipRoot = {
    type: "", //!Is there a way to assign a singular value
    dom: container,
    props: {
      children: [element],
    },
    alternate: currentRoot,
  };
  deletions = [];
  nextUnitOfWork = wipRoot;
}
  
function workLoop(deadline: IdleDeadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }

  if (!nextUnitOfWork && wipRoot) {
      commitRoot();
  }

  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);
  
function performUnitOfWork(fiber: Fiber): Fiber | null {
  const isFunctionComponent = fiber.type instanceof Function;
  if (isFunctionComponent) {
    updateFunctionComponent(fiber);
  } else {
    updateHostComponent(fiber);
  }
  if (fiber.child) {
    return fiber.child;
  }
  let nextFiber: Fiber | null | undefined = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }
  return null;
}
  
function updateFunctionComponent(fiber: Fiber) {
    wipFiber = fiber;
    hookIndex = 0;
    wipFiber.hooks = [];
    const children = [(fiber.type as Function)(fiber.props)];   //!This is basically calling the Function with arguments as fiber.props
    reconcileChildren(fiber, children);
}
  
function useState<T>(initial: T): [T, (action: (prevState: T) => T) => void] {
    const oldHook =
      wipFiber?.alternate?.hooks &&
      wipFiber.alternate.hooks[hookIndex!] || null;
    const hook: Hook = {
      state: oldHook ? oldHook.state : initial,
      queue: [],
    };
  
    const actions = oldHook ? oldHook.queue : [];
    actions.forEach(action => {
      hook.state = action(hook.state);
    });
  
    const setState = (action: (prevState: T) => T) => {
      hook.queue.push(action);
      wipRoot = {
        dom: currentRoot!.dom!,
        props: currentRoot!.props,
        alternate: currentRoot,
      };
      nextUnitOfWork = wipRoot;
      deletions = [];
    };
  
    wipFiber?.hooks?.push(hook);
    hookIndex!++;
    return [hook.state, setState];
}
  
function updateHostComponent(fiber: Fiber) {
    if (!fiber.dom) {
        fiber.dom = createDom(fiber);
    }
    reconcileChildren(fiber, fiber.props.children);
}

function reconcileChildren(wipFiber: Fiber, elements: Element[]) {
    let index = 0;
    let oldFiber = wipFiber.alternate?.child || null;
    let prevSibling: Fiber | null = null;
  
    while (index < elements.length || oldFiber !== null) {
        const element = elements[index];
        let newFiber: Fiber | null = null;
  
        const sameType = oldFiber && element && element.type === oldFiber.type;
  
        if (sameType) {
            newFiber = {
                type: oldFiber!.type,
                props: element.props,
                dom: oldFiber!.dom,
                parent: wipFiber,
                alternate: oldFiber,
                effectTag: "UPDATE",
            };
        }
        if (element && !sameType) {
            newFiber = {
                type: element.type,
                props: element.props,
                dom: null,
                parent: wipFiber,
                alternate: null,
                effectTag: "PLACEMENT",
            };
        }
        if (oldFiber && !sameType) {
            oldFiber.effectTag = "DELETION";
            deletions.push(oldFiber);
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
  
//   const Didact = {
//     createElement,
//     render,
//     useState,
//   };
  
//   /** @jsx Didact.createElement */
//   function Counter() {
//     const [state, setState] = Didact.useState(1);
//     return (
//       <h1 onClick={() => setState(c => c + 1)}>
//         Count: {state}
//       </h1>
//     );
//   }
  
//   const element = <Counter />;
//   const container = document.getElementById("root")!;
//   Didact.render(element, container);
  

// // Global state for hooks
// let wipFiber: Fiber | null = null;
// let hookIndex: number = 0;
