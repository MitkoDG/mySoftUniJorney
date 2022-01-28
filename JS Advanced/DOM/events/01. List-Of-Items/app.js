function addItem() {
    document.getElementById('error').textContent = '';
    if (!document.getElementById('newItemText').value == '') {
        let text = document.getElementById('newItemText').value;
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(text))

        document.getElementById('items').appendChild(li)

        document.getElementById('newItemText').value = '';
    } else {
        document.getElementById('error').textContent = 'no input';
    }

}