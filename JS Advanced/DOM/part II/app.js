function addMovie() {
    let ulElemenet = document.getElementById('movie-list');
    let movieLiElement = document.createElement('li');
    let movieTyped = document.getElementById('add')
    movieLiElement.textContent = movieTyped.value;
    ulElemenet.appendChild(movieLiElement)
}
function removeMovie() {
    let listElements = document.querySelectorAll('li');

}

// line through on click
let movieElements = document.querySelectorAll('#movie-list li');

movieElements.forEach(el => {
    el.addEventListener('click', function (e) {
        e.currentTarget.style.textDecoration = 'line-through';
    });
});


