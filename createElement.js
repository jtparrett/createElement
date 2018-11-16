const appendChildren = (children, node) => {
  children.forEach(child => {
    if(typeof child === 'function'){
      node.appendChild(child(node))
      return false
    }
    
    if(child === undefined || typeof child === 'boolean'){
      return false
    }

    if(Array.isArray(child)){
      appendChildren(child, node)
      return false
    }

    if(typeof child === 'string' || typeof child === 'number'){
      const textNode = document.createTextNode(child.toString())
      node.appendChild(textNode)
      return false
    }
    
    node.appendChild(child)
  })
}

const createElement = (component, props, ...children) => {
  if(typeof component === 'function'){
    return component({...props}, children)
  }

  const node = document.createElement(component)
  appendChildren(children, node)

  if(!props){
    return node
  }

  Object.entries(props).forEach(([key, value]) => {
    if(key === 'onDidMount'){
      value(node, props, children)
    }

    if(key.indexOf('on') === 0){
      const eventName = key.replace('on', '').toLowerCase()
      node.addEventListener(eventName, value)
      return false
    }

    node.setAttribute(key, value)
  })

  return node
}

export default createElement