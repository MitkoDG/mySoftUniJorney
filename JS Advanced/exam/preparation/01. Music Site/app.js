window.addEventListener('load', solve);

function solve() {
    let allHitsSection = document.querySelector('#all-hits .all-hits-container')
    let saveHitsSection = document.querySelector('#saved-hits .saved-container')
    let likesSection = document.querySelector('#total-likes .likes p')
    let userInput = document.querySelectorAll('form input')
    let addBtn = document.getElementById('add-btn')
    addBtn.addEventListener('click',submit);
    let [genre, songName, author, data] = Array.from(userInput)

    function forTestingReason() {
       genre.value = 'Pop' 
       songName.value = 'Name of this song'
       author.value = 'Rihanna'
       data.value = '20.08.1983'
    }
    let likes = 0;

    forTestingReason()
    function submit(event) {
        event.preventDefault();
        if (genre.value == '' && songName.value == '' && author.value == '' && data.value == '' ) {
            return
        }
        let newSongDiv = createAnElement('div','','hits-info',allHitsSection);
        let img = createAnElement('img','','',newSongDiv);
        img.src = './static/img/img.png';
        createAnElement('h2',`Genre: ${genre.value}`,'',newSongDiv);
        createAnElement('h2',`Name: ${songName.value}`,'',newSongDiv);
        createAnElement('h2',`Author: ${author.value}`,'',newSongDiv);
        createAnElement('h3',`Date: ${data.value}`,'',newSongDiv);
        let saveBtn = createAnElement('button','Save song','save-btn',newSongDiv);
        let likeBtn = createAnElement('button','Like song','like-btn',newSongDiv);
        let deleteBtn = createAnElement('button','Delete','delete-btn',newSongDiv);

        saveBtn.addEventListener('click', onSave);
        likeBtn.addEventListener('click', onLike);
        deleteBtn.addEventListener('click', onDelete);

    }
    function onSave(event) {
        event.preventDefault();
        let target = event.target.parentElement;
        event.target.nextSibling.remove();
        event.target.remove();
        saveHitsSection.appendChild(target)
    }

    function onLike(event) {
        event.preventDefault();
        event.target.disabled = true;
        likes++
        likesSection.textContent = `Total Likes: ${likes}`
    }

    function onDelete(event) {
        event.preventDefault();
        let target = event.target.parentElement;
        target.remove()
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

