console.log('init');

function onSecondButtonClick() {
    console.log('Second button click');
}
function makeBoom() {
    let bmwElement = document.getElementById('bmw-car')
    bmwElement.textContent += ' BOOM'
    bmwElement.style.fontWeight = "bold";
    // bmwElement.style.textTransform = 'lowercase';

}
