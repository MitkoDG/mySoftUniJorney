function solve() {
    let taskInpuit = document.getElementById('task');
    let taskDescription = document.getElementById('description');
    let taskDate = document.getElementById('date');
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onClick);

    let sectionOrange = document.querySelector('section').nextSibling
    console.log(sectionOrange);
    function onClick(event) {
        if (taskInpuit.value && taskDescription.value && taskDate.value) {
            

        }
    }
}