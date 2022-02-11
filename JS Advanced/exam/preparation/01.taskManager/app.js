function solve() {
    let taskInpuit = document.getElementById('task');
    let taskDescription = document.getElementById('description');
    let taskDate = document.getElementById('date');
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onClick);

    let allSections = Array.from(document.querySelectorAll('section'));
    let openSection = allSections[1];
    let inProgressSection = allSections[2];
    let complete = allSections[3];
    // function forTestingReason() {
    //     taskInpuit.value = 'Testing';
    //     taskDescription.value = 'Doing tests';
    //     taskDate.value = '17-12-2021'
    // }
    // forTestingReason()
    function onClick(event) {
        event.preventDefault();
        if (taskInpuit.value && taskDescription.value && taskDate.value) {
            let openDiv = openSection.querySelector('div:last-of-type');
            let openArticle = createAnElement('article', '', '');
            let h3El = createAnElement('h3', taskInpuit.value, '', openArticle);
            let pElDescr = createAnElement('p', `Description: ${taskDescription.value}`, '', openArticle);
            let pElDate = createAnElement('p', `Due Date: ${taskDate.value}`, '', openArticle);
            let divElement = createAnElement('div', '', 'flex', openArticle);
            let greenBtn = createAnElement('button', 'Start', 'green', divElement);
            let redBtn = createAnElement('button', 'Delete', 'red', divElement);
            openDiv.appendChild(openArticle);

            greenBtn.addEventListener('click', startFunc);
            redBtn.addEventListener('click', deleteFunc);
            clearInput();
        }
    }

    function startFunc(event) {
        event.preventDefault();
        let progressDiv = document.getElementById('in-progress');
        let artToMove = event.target.parentElement.parentElement;
        let greenToRemove = artToMove.querySelector('.green');
        greenToRemove.remove()
        let redToRemove = artToMove.querySelector('.red');
        redToRemove.remove()
        let divForButtons = artToMove.querySelector('div');
        let redBtnDelete = createAnElement('button', 'Delete', 'red', divForButtons);
        let orangeBtnFinish = createAnElement('button', 'Finish', 'orange', divForButtons);
        redBtnDelete.addEventListener('click', deleteFunc);
        orangeBtnFinish.addEventListener('click', completed)
        progressDiv.appendChild(artToMove);
    }
    function deleteFunc(event) {
        event.target.parentElement.parentElement.remove();
    }

    function completed(event) {
        event.preventDefault();
        let openDiv = complete.querySelector('div:last-of-type');
        let completedSection = event.target.parentElement.parentElement;
        event.target.parentElement.remove()
        openDiv.appendChild(completedSection)
    }

    function clearInput() {
        taskInpuit.value = '';
        taskDescription.value = '';
        taskDate.value = '';
    }

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
}