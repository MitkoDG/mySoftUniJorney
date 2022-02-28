function attachEvents() {
    console.log("TODO...");
    // add eventListener to the btn
}

attachEvents();


async function getForecast(name) {
    const code = await getLocationCode(name);

    const [current, upcoming] = await Promise.all([
        getCurrent(code),
        getUpcoming(code)
    ])

    return {current, upcoming}
}
async function getLocationCode(name){
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
     const res = await fetch(url);
     const data = await res.json();

    const location = data.find(l=> l.name == name);

     return location.code;

}

async function getCurrent(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
    
    const res = await fetch(url);
    const data = await res.json()

    return data;
}

async function getUpcoming(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;
    
    const res = await fetch(url);
    const data = await res.json()

    return data;
}