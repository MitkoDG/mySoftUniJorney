async function solution() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list'
    await loadList(url);

}
solution()

async function loadList(url) {
    const main = document.getElementById('main');

    let res = await fetch(url);
    let data = await res.json();

    for (const net of data) {
        let artId = net._id;
        let artName = net.title;
        let newDiv = document.createElement('div');
        newDiv.classList = 'accordion';
        newDiv.innerHTML = `
        <div class="head">
            <span>${artName}</span>
            <button class="button" id="${artId}">More</button>
        </div>`
        newDiv.querySelector('button').addEventListener('click', extraInfo)
        let res = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${artId}`)
        let data = await res.json();
        let extraDiv = document.createElement('div');
        extraDiv.classList = 'extra';
        extraDiv.innerHTML = `<p>${data.content}</p>
        </div>`
        newDiv.appendChild(extraDiv)
        main.appendChild(newDiv)

    }

}

function extraInfo(event) {
    let target = event.target;
    let accDiv = target.parentElement.parentElement
    let extraDiv = accDiv.querySelector('.extra')

    if (target.textContent == 'More') {
        extraDiv.style.display = 'block'
        target.textContent = 'Less'
    } else {
        extraDiv.style.display = 'none'
        target.textContent = 'More'
    }

}