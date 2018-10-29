function createElement(type, props, ...childrens) {
  return {
    type: type,
    props: {
      props,
      children: childrens.length <= 1 ? childrens[0] : childrens
    }
  };
}


let jsxObj = createElement(
  'div',
  null,
  createElement(
    'h1',
    {
      style: {
        fontSize: '160px'
      },
      className: 'box'
    },
    'hello'
  ),
  createElement(
    'ul',
    null,
    createElement(
      'li',
      null,
      'AA'
    ),
    createElement('li', null)
  )
);

//=>DOM的动态创建
function render(jsxObj, container, callback) {
  console.log(jsxObj)
  let {
    type,
    props
  } = jsxObj;
  console.log('type:', type);
  console.log('props:', props);
  let {
    children
  } = props;
  console.log('children:', children);
  // 创建dom节点
  let newElement = document.createElement(type);
  // 添加属性和子元素
  for (let attr in props) {
    if (!props.hasOwnProperty(attr)) break;
    switch (attr) {
      case 'className':
        newElement.setAttribute('class', props[attr]);
        break;
      case 'style':
        let styleObj = props['style'];
        for (let key in styleObj) {
          if (styleObj.hasOwnProperty(key)) {
            newElement['style'][key] = styleObj[key];
          }
        }
        break;
      // 创建dom的子节点
      case 'children':
        let childrenAry = props['children'];
        childrenAry = childrenAry instanceof Array ? childrenAry : (childrenAry ? [childrenAry] : []);
        childrenAry.forEach(item => {
          if (typeof item === 'string') {
            // 字符串:文本节点，直接增加到元素中
            newElement.appendChild(document.createTextNode(item));
          } else {
            // 不是字符串:新的JSX元素，递归调用 render，此时的容器为当前新创建的 newElement
            render(item, newElement);
          }
        });
      default:
        newElement.setAttribute(attr, props[attr]);
    }
  }

  container.appendChild(newElement);
  callback && callback();
}
render(jsxObj, window.root, () => {
  console.log('render success');
});