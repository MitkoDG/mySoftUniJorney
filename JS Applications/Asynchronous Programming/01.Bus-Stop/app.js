async function getInfo() {
    // read input value
    //make request to server
    //parce response data
    // display data
    //  error checking for request

    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const timeTableElement = document.getElementById('buses')
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        timeTableElement.innerHTML = '';
        // timeTableElement.replaceChild();
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