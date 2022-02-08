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