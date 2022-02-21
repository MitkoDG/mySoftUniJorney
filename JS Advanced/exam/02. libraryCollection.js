// class LibraryCollection {

//     constructor(capacity) {
//         this.capacity = Number(capacity);
//         this.books = [];
//     }

//     addBook(bookName, bookAuthor) { // strings
//         let length = this.books.length
//         if (this.capacity <= length) {
//             throw new Error("Not enough space in the collection.")
//         }
//         this.books.push({ bookName, bookAuthor, payed: false });
//         return `The ${bookName}, with an author ${bookAuthor}, collect.`
//     }
//     payBook(bookName) {
//         let isFound = this.books.find(b => b.bookName === bookName);
//         // let isPaid = this.books.some(b => b.payed === 'true');
//         // console.log(isPaid);
//         if (!isFound) {
//             throw new Error(`${bookName} is not in the collection.`)
//         }
//         if (isFound.payed) {
//             throw new Error(`${bookName} has already been paid.`)
//         }

//         isFound.payed = true;
//         return `${bookName} has been successfully paid.`
//     }

//     removeBook(bookName) {
//         let isFound = this.books.find(b => b.bookName === bookName);
//         // let isPaid = this.books.some(b => b.payed === 'true');

//         if (!isFound) {
//             throw new Error("The book, you're looking for, is not found.")
//         }
//         if (isFound.payed == false) { // check if mistake
//             throw new Error(`${bookName} need to be paid before removing from the collection.`)
//         }

//         let indexOfBook = this.books.indexOf(isFound)
//         this.books.splice(indexOfBook, 1);
//         return `${bookName} remove from the collection.`
//     }

//     getStatistics(bookAuthor) {
//         let result = []
//         let totalBooks = this.books.length
//         let emptySlots = this.capacity - totalBooks
//         let sorted = this.books.sort((a, b) => {
//             a.bookName.localeCompare(b.bookName);
//         })
//         if (typeof bookAuthor == 'undefined') {
//             result.push(`The book collection has ${emptySlots} empty spots left.`)
//             for (const x of sorted) {
//                 // console.log(x.payed);
//                 if (x.payed == 'true') {
//                     result = `${x.bookName} == ${x.bookAuthor} - Has Paid`
//                 } else {
//                     result = `${x.bookName} == ${x.bookAuthor} - Not Paid`
//                 }
//             }
//         } else {
//             // console.log(authorBook.payed);
//             let authorBook = this.sorted.find(b => b.bookAuthor === bookAuthor);
//             result.push(`The book collection has ${emptySlots} empty spots left.`)

//             if (authorBook.payed == 'true') {
//                 result.push(`${authorBook.bookName} == ${authorBook.bookAuthor} - Has Paid`)

//             } else {
//                 result.push(`${authorBook.bookName} == ${authorBook.bookAuthor} - Not Paid`)
//             }
//         }

//         // console.log(result);
//         return result
//     }
// }

class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        this.capacity = Number(this.capacity);
        let isFound = this.books.find(b => b.bookName == bookName);
        if (this.books.length >= this.capacity) {
            throw new Error("Not enough space in the collection.")
        }
        if (!isFound) {
            this.books.push({ bookName, bookAuthor, payed: false, })
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }
    payBook(bookName) {
        let isFound = this.books.find(b => b.bookName == bookName);
        if (!isFound) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (isFound.payed) {
            throw new Error(`${bookName} has already been paid.`)
        } else {
            isFound.payed = true;
            return `${bookName} has been successfully paid.`
        }
    }
    removeBook(bookName) {
        let isFound = this.books.find(b => b.bookName == bookName);
        if (!isFound) {
            throw new Error("The book, you're looking for, is not found.")
        }
        if (!isFound.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        } else {
            let indexOfBook = this.books.indexOf(isFound);
            this.books.splice(indexOfBook, 1);
            return `${bookName} remove from the collection.`
        }

    }
    getStatistics(bookAuthor) {
        let emptySlots = Number(this.capacity) - this.books.length;
        let message = `The book collection has ${emptySlots} empty spots left.\n`
        let isFound = this.books.find(el => el.bookAuthor === bookAuthor);
        if (!bookAuthor) {
            let result = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
                .reduce((acc, el) => {
                    if (el.payed) {
                        acc.push(`${el.bookName} == ${el.bookAuthor} - Has Paid.`)
                    } else {
                        acc.push(`${el.bookName} == ${el.bookAuthor} - Not Paid.`)
                    }
                    return acc
                }, []);
            return message += result.join('\n')
        } else if (bookAuthor) {
            if (!isFound) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
            let result = this.books.filter((el) => el.bookAuthor === bookAuthor)
                .reduce((acc, el) => {
                    if (el.payed === true) {
                        acc.push(`${el.bookName} == ${el.bookAuthor} - Has Paid.`)
                    } else {
                        acc.push(`${el.bookName} == ${el.bookAuthor} - Not Paid.`)
                    }
                    return acc;
                }, [])
                return result.join('\n')
        }

    }
}





// console.log('---input 1 ---');
// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));
// The In Search of Lost Time, with an author Marcel Proust, collect.
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Not enough space in the collection.

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// In Search of Lost Time has been successfully paid.
// Don Quixote is not in the collection.


// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// Don Quixote remove from the collection.
// In Search of Lost Time need to be paid before removing from the collection.

// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

// The Don Quixote, with an author Miguel de Cervantes, collect.
// Don Quixote == Miguel de Cervantes - Not Paid.

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.

// let library = new LibraryCollection(2);

// console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.payBook('Don Quixote'));


// let library = new LibraryCollection(5);

// library.addBook("Don Quixote", "Miguel de Cervantes");
// library.payBook("Don Quixote");
// library.addBook("In Search of Lost Time", "Marcel Proust");
// library.addBook("Ulysses", "James Joyce");

// 'Ulysses == James Joyce - \'Not Paid\''
//Testing getStatistics()
// const LibraryCollection = result;
// let library = new LibraryCollection(5);

// library.addBook("Don Quixote", "Miguel de Cervantes");
// library.payBook("Don Quixote");
// library.addBook("In Search of Lost Time", "Marcel Proust");
// library.addBook("Ulysses", "James Joyce");

// console.log(library.getStatistics())
// ,
// `The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.`);

// Unexpected error: expected 'Ulysses == James Joyce - \'Not Paid\'' to equal 'The book collection has 2 empty spots left.\nDon Quixote == Miguel de Cervantes - Has Paid.\nIn Search of Lost Time == Marcel Proust - Not Paid.\nUlysses == James Joyce - Not Paid.'
// expected 'Ulysses == James Joyce - \'Not Paid\''
// to equal 'The book collection has 2 empty spots left.\n
// Don Quixote == Miguel de Cervantes - Has Paid.\n
// In Search of Lost Time == Marcel Proust - Not Paid.\n
// Ulysses == James Joyce - Not Paid.'
