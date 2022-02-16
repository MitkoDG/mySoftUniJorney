function solve() {

    let [name, hall, price] = document.querySelectorAll('#container input[type="text"]');
    let screenBtn = document.querySelector('#container button');
    let clearBtn=document.querySelector('#archive button');

    clearBtn.addEventListener('click', function(){
    let archiveTarget=document.querySelector('#archive ul');
    while (archiveTarget.firstChild) {
      archiveTarget.removeChild(archiveTarget.lastChild);
    }  

    });

    screenBtn.addEventListener('click', function (event) {
        event.preventDefault();
        let nameStr = name.value;
        let hallStr = hall.value;
        let priceVal= price.value;
        
        let priceStr = Number(price.value);
        let nanCheck = isNaN(parseFloat(priceStr));
        if (nameStr.length > 0) {
            if (hallStr.length > 0) {
                if (!nanCheck && priceVal.length>0) {
                    let unorderedList = document.querySelector('#movies ul');
                    let listItem = document.createElement('li');
                    let span = document.createElement('span');
                    let strong = document.createElement('strong');
                    span.textContent = nameStr;
                    strong.textContent = `Hall: ${hallStr}`;
                    listItem.appendChild(span);
                    listItem.appendChild(strong);
                    let divItem = document.createElement('div');
                    let strong2 = document.createElement('strong');
                    strong2.textContent = priceStr.toFixed(2);
                    let inputItem = document.createElement('input');
                    inputItem.placeholder = "Tickets Sold";
                    let archiveBtn = document.createElement('button');
                    archiveBtn.textContent = "Archive";
                    divItem.appendChild(strong2);
                    divItem.appendChild(inputItem);
                    divItem.appendChild(archiveBtn);
                    listItem.appendChild(divItem);
                    unorderedList.appendChild(listItem);

                    archiveBtn.addEventListener('click', function () {
                        let tickets = archiveBtn.parentElement.querySelector('input').value;
                        
                        let ticketsNum = Number(tickets);
                        let priceNum = Number(archiveBtn.parentElement.querySelector('strong').textContent);
                        let nanChecker = isNaN(parseFloat(ticketsNum));

                        if (!nanChecker&&tickets.length>0) {
                            let total = (ticketsNum * priceNum).toFixed(2);
                            let spanText = archiveBtn.parentElement.parentElement.querySelector('span').textContent;
                            let target = document.querySelector('#archive ul');
                            let archiveList = document.createElement('li');
                            let archiveSpan = document.createElement('span');
                            archiveSpan.textContent = spanText;
                            archiveList.appendChild(archiveSpan);
                            let archiveStrong = document.createElement('strong');
                            archiveStrong.textContent = `Total amount: ${total}`
                            archiveList.appendChild(archiveStrong);
                            let deleteBtn = document.createElement('button');
                            deleteBtn.textContent = "Delete";
                            archiveList.appendChild(deleteBtn);
                            target.appendChild(archiveList);
                            unorderedList.removeChild(archiveBtn.parentElement.parentElement);
                            deleteBtn.addEventListener('click', function () {
                                let target = deleteBtn.parentElement.parentElement;
                                target.removeChild(deleteBtn.parentElement);
                            })
                        }

                    })
                }
            }

        }
        name.value = '';
        hall.value = '';
        price.value = '';
    })



}