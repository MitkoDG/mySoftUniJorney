async function getInfo() {
    // read input value
    //make request to server
    //parce response data
    // display data
    //  error checking for request

    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const timeTableElement = document.getElementById('buses');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        timeTableElement.innerHTML = '';
        // timeTableElement.replaceChildren();
        stopName.textContent = 'Loading...'
        const res = await fetch(url);
        if (res.status != 200) {
            throw new Error('Stop IF not found')
        }
        const data = await res.json();
        stopName.textContent = data.name;

        Object.entries(data.buses).forEach(b=>{
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
            timeTableElement.appendChild(liElement)
        })
        

    } catch (error) {
        stopName.textContent = 'Error'
        alert(error.message)
    }

}

//alternative way
// function getInfo() {
//     let stopIdInput = document.getElementById('stopId')
//     let stopId = stopIdInput.value;

//     fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
//     .then(body => body.json())
//     .then(stopInfo =>{
//         let stopNameDiv = document.getElementById('stopName')
//         stopNameDiv.textContent = stopInfo.name
//         let busesUl = document.getElementById('buses')

//         Array.from(busesUl.querySelectorAll('li')).forEach(li => li.remove())

//         Object.keys(stopInfo.buses).forEach(key =>{
//             let busInfoLi = document.createElement('li')
//             busInfoLi.textContent = `Bus ${key} arrives in ${stopInfo.buses[key]} minutes`
//             busesUl.appendChild(busInfoLi)
//         })
//     })
//     .catch(err => {
//         let stopNameDiv = document.getElementById('stopName')
//         stopNameDiv.textContent = 'Error'
//         let busesUl = document.getElementById('buses')
//         Array.from(busesUl.querySelectorAll('li')).forEach(li => li.remove())

//     })
// }