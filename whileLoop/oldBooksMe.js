function oldBooks(input) {
    let index = 0;
    let favoriteBook = input[index];
    index++;

    let bookIsFound = false;
    let nextBook = input[index];
    let bookCounter = 0;

    while (nextBook !== 'No More Books') {
        let currentBook = input[index];
        
        if (currentBook === favoriteBook) {
            bookIsFound = true;
            break;
        }
        bookCounter++;
        index++;
        nextBook = input[index];
    }
    if (bookIsFound === false) {
        console.log('The book you search is not here!');
        console.log(`You checked ${bookCounter} books.`);
    } else{
        console.log(`You checked ${bookCounter} books and found it.`);
    }

}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);