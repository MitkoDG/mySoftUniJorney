// window.addEventListener('load', solve);

// function solve() {

//     let genre = document.getElementById('genre');
//     let name = document.getElementById('name');
//     let author = document.getElementById('author');
//     let date = document.getElementById('date');
//     let addBtn = document.getElementById('add-btn');
//     let index = 0;

//     let sectionDivEl = document.getElementById('all-hits');
//     let savedHit = document.getElementById('saved-hits').children[0];

//     addBtn.addEventListener('click', addSong)
//     sectionDivEl.addEventListener('click', moveSong)
//     savedHit.addEventListener('click', removeSong)

//     function removeSong(ev) {

//         ev.target.parentNode.remove()
//     }

//     function addSong(ev) {
//         ev.preventDefault()

//         if (genre.value != '' && name.value != '' && author.value != '' && date.value != '') {

//             let conteiner = sectionDivEl.children[0];

//             let div = document.createElement('div');
//             div.className = 'hits-info';

//             let img = document.createElement('img');
//             img.src = "./static/img/img.png";
//             div.appendChild(img);

//             let genreH2 = document.createElement('h2');
//             genreH2.textContent = `Genre: ${genre.value}`;
//             div.appendChild(genreH2);

//             let nameH2 = document.createElement('h2');
//             nameH2.textContent = `Name: ${name.value}`;
//             div.appendChild(nameH2);

//             let authorH2 = document.createElement('h2');
//             authorH2.textContent = `Author: ${author.value}`;
//             div.appendChild(authorH2);

//             let dateH3 = document.createElement('h3');
//             dateH3.textContent = `Date: ${date.value}`;
//             div.appendChild(dateH3);

//             let btnSave = document.createElement('button');
//             btnSave.className = "save-btn";
//             btnSave.textContent = 'Save song';
//             div.appendChild(btnSave);

//             let btnLike = document.createElement('button');
//             btnLike.className = "like-btn";
//             btnLike.textContent = 'Like song';
//             div.appendChild(btnLike);

//             let btnDelete = document.createElement('button');
//             btnDelete.className = "delete-btn";
//             btnDelete.textContent = 'Delete';
//             div.appendChild(btnDelete);

//             conteiner.appendChild(div);

//             genre.value = '';
//             name.value = '';
//             author.value = '';
//             date.value = '';
//         }
//     }

//     function moveSong(ev) {
//         ev.preventDefault()

//         let currTarget = ev.target;
//         let currTargetTextContent = ev.target.textContent;

//         if (currTargetTextContent == 'Delete') {

//             currTarget.parentNode.remove();

//         } else if (currTargetTextContent == 'Like song') {

//             index++
//             let sectionTotalLikes = document.getElementById('total-likes');
//             sectionTotalLikes.children[0].children[0].textContent = `Total Likes: ${index}`;
//             currTarget.disabled = true

//         } else if (currTargetTextContent == 'Save song') {

//             savedHit.appendChild(currTarget.parentNode);
//             currTarget.parentNode.children[6].remove()
//             currTarget.parentNode.children[5].remove()

//         }
//     }

// }

window.addEventListener('load', solve);

function solve() {

    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');
    const addButton = document.getElementById('add-btn');

    addButton.addEventListener('click', onClick);

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
                
                
                document.querySelector('.all-hits-container').appendChild(divElement);

            }





        }




    }


}