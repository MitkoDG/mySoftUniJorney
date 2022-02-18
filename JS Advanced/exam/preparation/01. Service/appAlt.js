function solve() {
    let productType = document.getElementById('type-product');
    let description = document.getElementById('description');
    let clientName = document.getElementById('client-name');
    let clientPhone = document.getElementById('client-phone');
    let sendFormButton = document.querySelector('#right form > button');

    let receivedOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');
    let clearButton = document.querySelector('.clear-btn');

    const startRepair = (e) => {
        e.currentTarget.setAttribute('disabled', true);
        e.currentTarget.nextSibling.removeAttribute('disabled');
    };
    const finishRepair = (e) => {
        completedOrders.appendChild(e.currentTarget.parentNode);
        e.currentTarget.previousSibling.remove();
        e.currentTarget.remove();
    };
    const clearOrders = (e) => {
        let divElements = Array.from(
            completedOrders.querySelectorAll('.container')
        );

        divElements.map((x) => x.remove());
    };

    clearButton.addEventListener('click', clearOrders);

    const onClick = (e) => {
        e.preventDefault();
        if (
            !(
                productType.value &&
                description.value &&
                clientName.value &&
                clientPhone.value
            )
        ) {
            return;
        }

        let orderContainer = document.createElement('div');
        let typeHeading = document.createElement('h2');
        let infoHeading = document.createElement('h3');
        let descriptionHeading = document.createElement('h4');
        let startButton = document.createElement('button');
        let finishButton = document.createElement('button');

        orderContainer.classList.add('container');

        typeHeading.textContent = `Product type for repair: ${productType.value}`;
        infoHeading.textContent = `Client information: ${clientName.value}, ${clientPhone.value}`;
        descriptionHeading.textContent = `Description of the problem: ${description.value}`;

        startButton.classList.add('start-btn');
        startButton.textContent = 'Start repair';
        startButton.addEventListener('click', startRepair);

        finishButton.classList.add('finish-btn');
        finishButton.textContent = 'Finish repair';
        finishButton.setAttribute('disabled', true);
        finishButton.addEventListener('click', finishRepair);

        orderContainer.appendChild(typeHeading);
        orderContainer.appendChild(infoHeading);
        orderContainer.appendChild(descriptionHeading);
        orderContainer.appendChild(startButton);
        orderContainer.appendChild(finishButton);

        receivedOrders.appendChild(orderContainer);

        description.value = '';
        clientName.value = '';
        clientPhone.value = '';
    };

    sendFormButton.addEventListener('click', onClick);
}