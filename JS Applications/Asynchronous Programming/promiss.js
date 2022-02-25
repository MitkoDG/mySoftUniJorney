
function onClick() {
    const req = makeRequest('https://....');
    req
        .then(data => console.log(data))
        .catch(error => console.log(error));
}


function makeRequest(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(resolve)
            .catch(reject);
    });
}