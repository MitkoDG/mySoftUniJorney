window.addEventListener('load', solve);

function solve() {
    let productInput = document.getElementById('type-product');
    let descrInput = document.getElementById('description');
    let clientNameInput = document.getElementById('client-name');
    let clientPhoneInput = document.getElementById('client-phone');
    let submitBtn = document.querySelector('button');
    submitBtn.addEventListener('click', onClick);
    let receivedSection = document.getElementById('received-orders');
    let completedSection = document.getElementById('completed-orders');
    let clearBtn = document.querySelector('.clear-btn')

    // function forTestingReason() {
    //     productInput.value = 'Computer'
    //     descrInput.value = 'Not working'
    //     clientNameInput.value = 'DDG'
    //     clientPhoneInput.value = '+359876332323'
    // }
    // forTestingReason();

    function onClick(event) {
        event.preventDefault();
        if (productInput.value == '' || descrInput.value == '' || clientNameInput.value == '' || clientPhoneInput.value == '') {
            return;
        }
        let newTaskDiv = createAnElement('div', '', 'container', '');
        createAnElement('h2', `Product type for repair: ${productInput.value}`, '', newTaskDiv);
        createAnElement('h3', `Client information: ${clientNameInput.value}, ${clientPhoneInput.value}`, '', newTaskDiv);
        createAnElement('h4', `Description of the problem: ${descrInput.value}`, '', newTaskDiv);
        let startBtn = createAnElement('button', 'Start repair', 'start-btn', newTaskDiv);
        let finishBtn = createAnElement('button', 'Finish repair', 'finish-btn', newTaskDiv);

        finishBtn.disabled = true;
        startBtn.addEventListener('click', onStart);
        finishBtn.addEventListener('click', onFinish);

        receivedSection.appendChild(newTaskDiv);
        productInput.value = ''
        descrInput.value = ''
        clientNameInput.value = ''
        clientPhoneInput.value = ''
    }
    function onStart(event) {
        let targetEl = event.target.parentElement;
        let startBtn = targetEl.querySelector('.start-btn');
        let finishBtn = targetEl.querySelector('.finish-btn');
        startBtn.disabled = true;
        finishBtn.disabled = false;


    }
    function onFinish(event) {
        let targetEl = event.target.parentElement;
        let startBtn = targetEl.querySelector('.start-btn');
        let finishBtn = targetEl.querySelector('.finish-btn');
        Array.from(targetEl.querySelectorAll('button')).map(el => el.remove()); // one line instead of 4
        // startBtn.remove();
        // finishBtn.remove();
        completedSection.appendChild(targetEl);
    }

    clearBtn.addEventListener('click', onClear);
    function onClear(event) {
        let allTasks = Array.from(document.querySelectorAll('#completed-orders .container'));
        allTasks.forEach(el=>el.remove());
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