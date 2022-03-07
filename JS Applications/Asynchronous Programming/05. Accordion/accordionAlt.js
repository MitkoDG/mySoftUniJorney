async function solution() {
    const mainSection = document.getElementById('main');
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list'

    const responce = await fetch(url);
    const data = await responce.json();

    
    data.forEach(a => {
        let divAccordion = createElement('div','',['class','accordion'],mainSection);
        let divHead = createElement('div','',['class','head'],divAccordion)
        
    })

    

    function createElement(type, content, attribute = [],appender) {
        const element = createElement(type);

        if (content) {
            element.textContent = content;
        }
        if (attribute.length > 0) {
            for (let i = 0; i < attribute.length; i++) {
                element.setAttribute(attribute[i],attribute[i+2])
                
            }
        }
        if (appender) {
            appender.appendChild(element)
        }
    }
}

//alternative
async function solution() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    const res = await fetch(url);
    const data = await res.json();

    let main = document.getElementById('main');

    Object.values(data).forEach(x => {

        let div = document.createElement('div');
        div.classList = 'accordion';
        div.innerHTML = `<div class="head">
        <span>${x.title}</span>
        <button class="button" id="${x._id}">More</button>
    </div>
    <div class="extra">
        <p></p>
    </div>`

        div.querySelector('button').addEventListener('click', more);
        main.appendChild(div);
    })

    async function more(e) {
        let div = e.target.parentElement.parentElement.querySelector('div.extra');

        if (e.target.textContent == 'More') {
            e.target.disabled = true;
            e.target.textContent = 'Less'

            let id = e.target.id;
            let details = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

            const detailsRes = await fetch(details);
            const detailsData = await detailsRes.json();

            div.querySelector('p').textContent = detailsData.content;
            div.style.display = 'block';
            e.target.disabled = false;
        } else {
            e.target.textContent = 'More';
            div.style.display = 'none';
        }
    }
}

solution();