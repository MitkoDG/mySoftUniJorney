function solve() {
    let [name, hall, ticketPrice] = [...document.querySelectorAll('input')];
    let onScreenBtn = document.querySelector('#container button');
    onScreenBtn.addEventListener('click', onScreen);
    let ulElementMovies = document.querySelector('#movies ul');
    let ulElementArchive = document.querySelector('#archive ul');
    

    function onScreen(event) {
        event.preventDefault()
        if ([name, hall, ticketPrice].every(element=> element.value !== '') && Number(ticketPrice.value)) { // every checks whether every single elements meet the statement at the brakets
            let price = Number(ticketPrice.value).toFixed(2);
            let liElement = document.createElement('li');
            let spanElement = createAnElement('span',`${name.value}`,'',liElement);
            let strongElement = createAnElement('strong',`Hall: ${hall.value}`, '', liElement);
            let divElement = createAnElement('div','','',liElement);
            let priceStrong = createAnElement('strong',`${price}`,'',divElement);
            let inputElement = createAnElement('input','','',divElement);
            inputElement.setAttribute('placeholder', 'Ticket Sold');
            let archiveBtn = createAnElement('button', 'Archive', '',divElement);
            ulElementMovies.appendChild(liElement);

            
            archiveBtn.addEventListener('click', onArchive);
        }

        [name, hall, ticketPrice].map((x)=> x.value = '');

    }
    function onArchive(event) {
        let soldTickets = event.target.parentElement.querySelector('input');
        
        if (Number(soldTickets.value)) {
            let numTicket = Number(soldTickets.value);
            let priceLine = event.target.parentElement.querySelector('strong');
            let totalPrice = Number(priceLine.textContent) * numTicket;
            let btn = event.target;
            btn.textContent = 'Delete';
            let liElement = event.target.parentElement.parentElement;
            liElement.appendChild(btn);
            liElement.querySelector('strong').textContent = `Total amount: ${totalPrice.toFixed(2)}`
            liElement.querySelector('div').remove();


            ulElementArchive.appendChild(liElement);
            btn.addEventListener('click', (e)=>{
                e.target.parentElement.remove();
            });
        }

    }

    let clearBtn = document.querySelector('#archive button');
    clearBtn.addEventListener('click', clearEl);

    function clearEl(event) {
        // let liElement = event.target.parentElement;
        // let allElements = Array.from(liElement.querySelectorAll('li'));
        // allElements.map((el)=>{
        //     el.remove();
        // })
        ulElementArchive.innerHTML = '';
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