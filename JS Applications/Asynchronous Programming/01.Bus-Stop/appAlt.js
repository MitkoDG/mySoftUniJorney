function getInfo() {
    const userInput = document.getElementById('stopId').value;
    document.getElementById('stopName').textContent = 'Loading...'
    
    fetch('http://localhost:3030/jsonstore/bus/businfo/' + userInput)
    .then(body => body.json())
    .then(stopInfo =>{
        document.getElementById('stopName').textContent = stopInfo.name;

        let busesUl = document.getElementById('buses');

        Array.from(busesUl.querySelectorAll('li')).forEach(li=>li.remove());

        Object.keys(stopInfo.buses).forEach(key=>{
            let busesInfoLi = document.createElement('li');
            busesInfoLi.textContent = `Bus ${key} arrives in ${stopInfo.buses[key]} minutes`
            busesUl.appendChild(busesInfoLi)
        })
    })
    .catch(err=>{
        document.getElementById('stopName').textContent = 'Error'
        let busesUl = document.getElementById('buses');
        Array.from(busesUl.querySelectorAll('li')).forEach(li=> li.remove())
    })
}