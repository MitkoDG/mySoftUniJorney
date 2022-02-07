function generateReport() {
    let checkedCheckboxesElement = document.querySelectorAll(`thead tr th input:checked`);
    let keys = [];

    for (let checked of checkedCheckboxesElement){
        keys.push([checked.name, checked.parentElement.cellIndex]);
    }

    let data  = [];
    for (let key of keys) {
        let values = document.querySelectorAll(`tbody tr td:nth-child(${key[1] + 1})`);
        let valuesLength = values.length;

        for (let i = 0; i < valuesLength; i++) {
            if (!data[i]) {
                data.push({ [key[0]]: values[i].textContent});
            } else {
                Object.assign(data[i], {[key[0]]: values[i].textContent});
            }
        }
    }
    let outputElement = document.querySelector('#output');
    outputElement.value = JSON.stringify(data);
}