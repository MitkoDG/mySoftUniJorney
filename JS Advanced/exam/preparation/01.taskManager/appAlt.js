function solve() {
    let [_, openDiv, inProgressDiv, completeDiv] = document.querySelectorAll(
        '.wrapper div:nth-child(2)'
    );

    let taskInput = document.getElementById('task');
    let descriptionTextarea = document.getElementById('description');
    let dateInput = document.getElementById('date');
    let addButton = document.getElementById('add');

    let taskArticle;
    const deleteTask = (e) => {
        e.currentTarget.parentNode.parentNode.remove();
    };

    const finishTask = (e) => {
        moveArticleToDiv(
            e.currentTarget.parentNode.parentNode,
            inProgressDiv,
            completeDiv
        );
        e.currentTarget.parentNode.remove();
    };

    const startTask = (e) => {
        let startButton = e.currentTarget;
        startButton.removeEventListener('click', startTask);
        startButton.addEventListener('click', deleteTask);
        startButton.classList.remove('green');
        startButton.classList.add('red');
        startButton.textContent = 'Delete';

        let deleteButton = e.currentTarget.parentNode.querySelector(
            'button:nth-child(2)'
        );

        deleteButton.removeEventListener('click', deleteTask);
        deleteButton.addEventListener('click', finishTask);
        deleteButton.classList.remove('red');
        deleteButton.classList.add('orange');
        deleteButton.textContent = 'Finish';

        moveArticleToDiv(
            e.currentTarget.parentNode.parentNode,
            openDiv,
            inProgressDiv
        );
    };

    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (
            !(taskInput.value && descriptionTextarea.value && dateInput.value)
        ) {
            return;
        }

        taskArticle = document.createElement('article');
        let header = document.createElement('h3');
        let descriptionParagraph = document.createElement('p');
        let dateParagraph = document.createElement('p');

        header.textContent = taskInput.value;
        descriptionParagraph.textContent = `Description: ${descriptionTextarea.value}`;
        dateParagraph.textContent = `Due Date: ${dateInput.value}`;

        let buttonDiv = document.createElement('div');
        let startButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        buttonDiv.classList.add('flex');
        startButton.classList.add('green');
        startButton.textContent = 'Start';
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Delete';

        startButton.addEventListener('click', startTask);
        deleteButton.addEventListener('click', deleteTask);

        buttonDiv.appendChild(startButton);
        buttonDiv.appendChild(deleteButton);

        taskArticle.appendChild(header);
        taskArticle.appendChild(descriptionParagraph);
        taskArticle.appendChild(dateParagraph);
        taskArticle.appendChild(buttonDiv);

        openDiv.appendChild(taskArticle);

        taskInput.value = '';
        descriptionTextarea.value = '';
        dateInput.value = '';
    });

    function moveArticleToDiv(article, fromDiv, toDiv) {
        fromDiv.removeChild(article);
        toDiv.appendChild(article);
    }
}