window.addEventListener('load', solve);

function solve() {
    // let [model, year, description, price] = document.querySelectorAll('input');
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');

    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onClick);
    let tBody = document.getElementById('furniture-list')


    function onClick(event) {
        event.preventDefault();
        let yearNum = Number(year.value);
        // price rounded till second digit
        let priceNum = Number(price.value).toFixed(2);
        // check - all fields with info and positive number 
        if (model.value && description.value && yearNum > 0 && priceNum > 0) {

            // new furniture - append to "furniture-list"
            let trClassInfo = createAnElement('tr', '', 'info', tBody);

            let modelInput = createAnElement('td', `${model.value}`, '', trClassInfo);
            let priceInput = createAnElement('td', `${priceNum}`, '', trClassInfo);
            
            let tdButtons = createAnElement('td', '', '', trClassInfo);
            let btnMore = createAnElement('button', 'More Info', 'moreBtn', tdButtons);
            let btnBuy = createAnElement('button', 'Buy it', 'buyBtn', tdButtons);
            let trClassHide = createAnElement('tr', '', 'hide', tBody);
            let tdYear = createAnElement('td', `Year: ${yearNum}`, '', trClassHide);
            let tdColspan = createAnElement('td', `Description: ${description.value}`, '', trClassHide);
            tdColspan.setAttribute('colspan', '3');

            btnMore.addEventListener('click', moreFunc);
            btnBuy.addEventListener('click', buyFunc);

            function moreFunc(event) {
                event.preventDefault();
                let eventTarget = event.target;
                if (eventTarget.textContent == 'More Info') {
                    btnMore.textContent = 'Less Info'
                    trClassHide.style.display = 'contents'
                } else {
                    btnMore.textContent = 'More Info'
                    trClassHide.style.display = 'none'
                }
            }
            
            
            function buyFunc(event) {
                event.preventDefault();
                let eventTarget = event.target;
                let totalLine = document.querySelector('.total-price');
                let total = Number(totalLine.textContent);
                let sum = Number(eventTarget.parentElement.parentElement.children[1].textContent)
                total+=sum;
                totalLine.textContent = total.toFixed(2);
                let hideSection = document.querySelector('eventTarget.parentElement.parentElement + tr')
                console.log(hideSection);
                eventTarget.parentElement.parentElement.remove();
            }
            // when click clear the input fields
            clearInput()
        }
    }
    function clearInput() {
        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';
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