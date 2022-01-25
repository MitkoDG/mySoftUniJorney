function editElement(ref, match, replacer) {
        const content = ref.textContent;
        const matcher = new RegExp(match, 'g');
        const edited = content.replace(matcher, replacer);
        ref.textContent = edited;      
}

function editElement(element, match, replacer) {
    while(element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacer);
    }
}

//     // regex solution
//     let pattern = new RegExp(match, 'g')
//     element.textContent = element.textContent.replace(pattern, replacer);
// };