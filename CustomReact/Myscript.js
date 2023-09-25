function customRender(data,mainContainer){
    // const domElement = document.createElement(data.type)
    // domElement.innerHTML = data.children
    // domElement.setAttribute('href',data.props.href)
    // domElement.setAttribute('target',data.props.target)
    // mainContainer.appendChild(domElement)


    const domElement = document.createElement(data.type)
    domElement.innerHTML = data.children
    for (const prop in data.props) {
        domElement.setAttribute(prop,data.props[prop])
    }
    mainContainer.appendChild(domElement)


}

const data = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    children: 'Click me to go to google'
}

const mainContainer =  document.querySelector('#root')
customRender(data, mainContainer)