/*

Note: Everthing is copied from the blog: https://pomb.us/build-your-own-react/

We will be implementing following:

1. Impl createElement function
2. Impl the render function
3. Implement concurrent mode
4. Implement Fibers
5. Implement render and commit phases
6. Implement Recoincilation
7. Implement fucntion components
8. Implement hooks 
*/

//!Step 1: Implementing substitute for the following react code:

/*
//const element = <h1 title="foo">Hello</h1>            --> JSX Code
//  --> Below is the replacement with the vanila js code
//const element = React.createElement("h1", {title: "foo"}, "Hello")    //! Again this creates a function with the output as the object
const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello",
    },
}
const container = document.getElementById("root")
//ReactDOM.render(element, container) //!This is place where React updates the DOM element. The render function
*/
const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello",
    },
}
const container = document.getElementById("root")


//ReactDOM.render(element, container) //!This is place where React updates the DOM element. The render function

const node = document.createElement(element.type)
node["title"] = element.props.title

const text = document.createTextNode("")
text["nodeValue"] = element.props.children

node.appendChild(text)
container.appendChild(node)

//!So above code has crated a DOM node of type h1 with the title "foo" and content described above



