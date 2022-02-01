window.addEventListener('load', solve);

function solve() {

    let [genre, name, author, date] = Array.from(document.querySelectorAll('input'));

    let index = 0;

    let addBtn = document.getElementById('add-btn');
    let sectionDivEl = document.getElementById('all-hits');
    let savedHit = document.getElementById('saved-hits').children[0];

    addBtn.addEventListener('click', addSong)
    sectionDivEl.addEventListener('click', moveSong)
    savedHit.addEventListener('click', removeSong)

    function removeSong(ev) {
        ev.target.parentNode.remove()
    }

    function addSong(ev) {
        ev.preventDefault()

        if (genre.value != '' && name.value != '' && author.value != '' && date.value != '') {

            let conteiner = sectionDivEl.children[0];

            let div = document.createElement('div');
            div.className = 'hits-info';

            let img = document.createElement('img');
            img.src = "./static/img/img.png";
            div.appendChild(img);
            //---------------------------------------------------

            //create new div elements
            createAnElement('h2', `Genre: ${genre.value}`, "", div);

            createAnElement('h2', `Name: ${name.value}`, "", div);

            createAnElement('h2', `Author: ${author.value}`, "", div);

            createAnElement('h3', `Date: ${date.value}`, "", div);

            //----------------------------------------------------

            //save button create
            createAnElement('button', 'Save song', 'save-btn', div);
            //like button create
            createAnElement('button', 'Like song', 'like-btn', div);
            //delete button reate
            createAnElement('button', 'Delete', 'delete-btn', div);

            conteiner.appendChild(div);

            clearInputs(...document.querySelectorAll('input'))
        }
    }

    function moveSong(ev) {
        ev.preventDefault();

        let currTarget = ev.target;
        let currTargetTextContent = ev.target.textContent;

        if (currTargetTextContent == 'Delete') {

            currTarget.parentNode.remove();

        } else if (currTargetTextContent == 'Like song') {

            index++
            let sectionTotalLikes = document.getElementById('total-likes');
            sectionTotalLikes.children[0].children[0].textContent = `Total Likes: ${index}`;
            currTarget.disabled = true;

        } else if (currTargetTextContent == 'Save song') {

            savedHit.appendChild(currTarget.parentNode);
            currTarget.parentNode.children[6].remove();
            currTarget.parentNode.children[5].remove();
        }
    }
    //!!!CREATE AN ELEMENT UNIVERSAL FUNCTION!!!
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
    ///REMOVE ALL VALUE OF INPUTS FROM AN ARRAY
    function clearInputs(...fields) {
        fields.forEach(f => f.value = '');
    }
}