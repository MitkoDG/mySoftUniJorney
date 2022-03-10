window.addEventListener('load', solve);

function solve() {

    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');
    const addButton = document.getElementById('add-btn');

    addButton.addEventListener('click', onClick);

    let count = 0;

    function onClick(event) {
        event.preventDefault();
        if (genre.value != '' && name.value != ''&& author.value != '' && date.value != '') {

            let divElement = document.createElement('div');
            divElement.className = 'hits-info';
            divElement.innerHTML = `<img src="./static/img/img.png">
            <h2>Genre: ${genre.value}</h2>
            <h2>Name: ${name.value}</h2>
            <h2>Author: ${author.value}</h2>
            <h3>Date: ${date.value}</h3>
            <button class="save-btn">Save song</button><button class="like-btn">Like song</button><button class="delete-btn">Delete</button>`;

            divElement.addEventListener('click', onSelect);

            function onSelect(event) {
                let button = event.target;
                let buttonText = button.textContent;

                if (buttonText === 'Delete') {
                    onDelete(event);
                }else if (buttonText === 'Like song') {
                    onLike(event);
                }else if (buttonText === 'Save song') {
                    onSave(event);
                }
            }
            
            document.querySelector('.all-hits-container').appendChild(divElement);

            clearInputs(...document.querySelectorAll('input'))

            function onLike(event) {
                count++;
                document.querySelector('.likes').children[0].textContent = `Total Likes: ${count}`
                // let likeLine = document.querySelector('.likes p')
                // likeLine.textContent = `Total Likes: ${count}`
                event.target.disabled = true;
            }

            function onSave(event) {
                let parentElement = event.target.parentElement;
                document.querySelector('.saved-container').appendChild(parentElement);
                Array.from(parentElement.querySelectorAll('button')).map((button) => {
                    if(button.textContent !== 'Delete'){
                        button.remove()
                    }
                })
            }

            function onDelete(event) {
                event.target.parentElement.remove()
            }

        }
    }

    function clearInputs(...fields) {
        fields.forEach(f => f.value = '');
    }
}