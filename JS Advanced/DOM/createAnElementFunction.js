function createAnElement(type, content, attribute, appender) {
    const el = document.createElement(type);
    if (attribute) {
        el.setAttribute('class', attribute);
        el.textContent = content;
    } else if (content) {
        el.textContent = content;
    }
    if (appender) {
        appender.appendChild(el);
    }
    return el;
}

function createElement(type, content, attribute = [],appender) {
    const element = createElement(type);

    if (content) {
        element.textContent = content;
    }
    if (attribute.length > 0) {
        for (let i = 0; i < attribute.length; i++) {
            element.setAttribute(attribute[i],attribute[i+2])
            
        }
    }
    if (appender) {
        appender.appendChild(element)
    }
}