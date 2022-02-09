window.addEventListener('load', solve);

function solve() {
    let [model, year, description, price] = document.querySelectorAll('input');
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onClick);

    function clearInput(...userInput) {
        userInput.value = '';
    }
    // check - all fields with info and positive number
    if (Number(year.value) < 0 && Number(price.value) < 0) {
        return
    }
    if (model.value != '' && year.value != '' && description.value != '' && price.value != '') {
        
        function onClick(event) {
            let trClassInfo = document.getElementById('furniture-list')
            trClassInfo.innerHTML = `<td>${model.value}</td>
                    <td>${price.value}</td>`
            let modelInput = document.createElement('td');
            modelInput.textContent = model.value;
            let priceInput = document.createElement('td');
            priceInput.textContent = price.value;

            // trClassInfo.appendChild(trClassInfo)




            clearInput(...document.querySelectorAll('input'))
            // when click clear the input fields
        }
    }
    // price rounded till second digit
    // new furniture - append to "furniture-list"
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
