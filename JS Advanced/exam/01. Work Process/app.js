function solve() {
    let userInput = Array.from(document.querySelectorAll('#signup input'))
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let dob = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let hireBtn = document.getElementById('add-worker');
    let tbodySection = document.getElementById('tbody');
    let budget = document.getElementById('sum');

    hireBtn.addEventListener('click', onHire);
    let total = 0;

    // function forTestingReason() {
    //     firstName.value = 'Mitko'
    //     lastName.value = 'Gegov'
    //     email.value = 'retimid@abv.bg'
    //     dob.value = '20.08.1983'
    //     position.value = 'CS'
    //     salary.value = '200819'
    // }
    // forTestingReason();
    function onHire(event) {
        event.preventDefault();
        // if (firstName.value == '' || lastName.value == '' || email.value == '' || dob.value == '' || position.value == '' || salary.value == '') {
        //     return
        // }

        let newTr = document.createElement('tr');
        createAnElement('td', firstName.value, '', newTr);
        createAnElement('td', lastName.value, '', newTr);
        createAnElement('td', email.value, '', newTr);
        createAnElement('td', dob.value, '', newTr);
        createAnElement('td', position.value, '', newTr);
        createAnElement('td', salary.value, '', newTr);
        let tdForBtn = createAnElement('td', '', '', newTr);
        let firedBtn = createAnElement('button', 'Fired', 'fired', tdForBtn);
        let editBtn = createAnElement('button', 'Edit', 'edit', tdForBtn);

        total = Number(budget.textContent);
        total += Number(salary.value)
        budget.textContent = total.toFixed(2);
        // console.log(total);
        firedBtn.addEventListener('click', onFired);
        editBtn.addEventListener('click', onEdit);
        tbodySection.appendChild(newTr)


        userInput.map(i => i.value = '');

    }

    function onEdit(event) {
        let dataSection = event.target.parentElement.parentElement;
        let userData = Array.from(dataSection.querySelectorAll('td'))
        firstName.value = userData[0].textContent
        lastName.value = userData[1].textContent
        email.value = userData[2].textContent
        dob.value = userData[3].textContent
        position.value = userData[4].textContent
        salary.value = userData[5].textContent
        dataSection.remove();

        total = Number(budget.textContent);
        total -= Number(salary.value);
        budget.textContent = total.toFixed(2);

    }
    function onFired(event) {
        let dataSection = event.target.parentElement.parentElement;
        let userData = Array.from(dataSection.querySelectorAll('td'))
        salary.value = userData[5].textContent
        dataSection.remove();

        total = Number(budget.textContent);
        total -= Number(salary.value);
        budget.textContent = total.toFixed(2);
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
solve()