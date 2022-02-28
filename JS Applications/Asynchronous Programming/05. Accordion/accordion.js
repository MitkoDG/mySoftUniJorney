async function getInfo() {
 
    const stopNameElement = document.getElementById('stopName');
    const timetableElement = document.getElementById('buses');
    const submitBtn = document.getElementById('submit');
 
    const stopId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
 
    try {
        stopNameElement.textContent = 'Loading...';
        timetableElement.replaceChildren();
        submitBtn.disabled = true;
 
        const res = await fetch(url);
 
 
        if (res.status !== 200) {
            throw new Error('Stop ID not found!');
        }
        const data = await res.json();
 
        stopNameElement.textContent = data.name;
 
        Object.entries(data.buses).forEach(b => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
            timetableElement.appendChild(liElement);
        });
        submitBtn.disabled = false;
 
    } catch (error) {
        stopNameElement.textContent = 'Error';
    }
 
}
 
//2
 
function solve() {
 
    const label = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
 
    let stop = {
        next: 'asd'
    };
 
 
    async function depart() {
        //get info for next stop
        //display next stop
        departBtn.disabled = true;
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        const res = await fetch(url);
        if (res.status !== 200) {
            label.textContent = `Error!`;
            arriveBtn.disabled = true;
            departBtn.disabled = true;
            alert('Wrong data!')
        }
 
 
        stop = await res.json();
        label.textContent = `Next stop ${stop.name}`
        arriveBtn.disabled = false;
    }
 
    function arrive() {
        label.textContent = `Arriving at ${stop.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }
 
    return {
        depart,
        arrive
    };
}
 
let result = solve();
 
//5
async function solution() {
 
    const main = document.getElementById('main');
 
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
 
    const response = await fetch(url);
    const data = await response.json();
 
    data.forEach(a =>{
       let divAccordion = createElement('div','',['class','accordion']);
       let divHead = createElement('div','',['class','head']);
       let span = createElement('span',a.title);
       let button = createElement('button','More',['class','button','id',a._id])
 
       let divExtra = createElement('div','',['class','extra']);
       let p = createElement('p')
 
       button.addEventListener('click',toggle);
 
       divExtra.appendChild(p);
       divAccordion.appendChild(divExtra)
       divHead.appendChild(button);
       divHead.appendChild(span);
       divAccordion.appendChild(divHead)
       main.appendChild(divAccordion);
    });
 
    async function toggle(ev){
        const accordion = ev.target.parentNode.parentNode;
 
        const p = ev.target.parentNode.parentNode.children[0].children[0];
 
        const extra =ev.target.parentNode.parentNode.children[0]
        console.log(extra)
 
        const id = ev.target.id;
        const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
 
        const response = await fetch(url);
        const data = await response.json();
 
        p.textContent = data.content;
 
        const hidden = ev.target.textContent === 'More';
 
        extra.style.display = hidden ? 'block':'none';
        ev.target.textContent = hidden ? 'Less':'More';
 
    }
 
 
    function createElement(type, content, attributes = []){
 
        const element = document.createElement(type);
 
        if(content){
            element.textContent = content;
        }
 
        if(attributes.length > 0){
            for(let i = 0;i<attributes.length;i+=2){
                element.setAttribute(attributes[i],attributes[i+1])
            }
 
        }
        return element;
 
    }
 
}
solution()