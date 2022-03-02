const btnLoad = document.getElementById('btnLoad').addEventListener('click', onLoad);
const phonebook = document.getElementById('phonebook');
const inputPerson = document.getElementById('person');
const inputPhone = document.getElementById('phone');
const createBtn = document.getElementById('btnCreate').addEventListener('click', createContact)
const url = 'http://localhost:3030/jsonstore/phonebook'

function attachEvents() {

    onLoad()
}

attachEvents();


async function onLoad() {
    phonebook.replaceChildren();
    const res = await fetch(url);
    const data = await res.json();


    Object.values(data).forEach(e => {
        let liEl = document.createElement('li');
        liEl.textContent = `${e.person}: ${e.phone}`
        let btnEl = document.createElement('button')
        btnEl.textContent = 'Delete'
        btnEl.addEventListener('click', deleteBtn)
        liEl.appendChild(btnEl)
        phonebook.appendChild(liEl)
    })
}

function deleteBtn() {

}

// let message = `{${inputPerson.value}, ${inputPhone.value}}`
async function createContact(contact) {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
    const result = await res.json();

    return result;
}

