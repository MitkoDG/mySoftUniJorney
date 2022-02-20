class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    //==========addBook==========
    addBook(bookName, bookAuthor) {
        this.capacity = Number(this.capacity);

        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    //==========payBook==========
    payBook(bookName) {

        let found = this.books.find(el => el.bookName === bookName)
        if (!found) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (found.payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        }
        found.payed = true;
        return `${bookName} has been successfully paid.`;
    }
    //==========removeBook==========
    removeBook(bookName) {
        let found = this.books.find(el => el.bookName === bookName);
        if (!found) {
            throw new Error("The book, you're looking for, is not found.");
        }
        if (found.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        let index = this.books.indexOf(found);
        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`;
    }
    //==========getStatistics==========
    getStatistics(bookAuthor) {
        let emptySlots = Number(this.capacity) - this.books.length;
        let message = `The book collection has ${emptySlots} empty spots left.\n`;
        let isFound = this.books.find(el => el.bookAuthor === bookAuthor);

        if (!bookAuthor) {

            let result = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
                .reduce((acc, el) => {
                    if (el.payed === true) {
                        acc.push(`${el.bookName} == ${el.bookAuthor} - Has Paid.`);
                    } else {
                        acc.push(`${el.bookName} == ${el.bookAuthor} - Not Paid.`);
                    }
                    return acc;
                }, []);
            return message += result.join('\n');
            
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
                }, []);
            return result.join('\n');
        }
    }
}


// alternative way
class LibraryCollection {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        let numberOfBooks = this.books.length;

        if (numberOfBooks >= this.capacity) {
            throw new Error("Not enough space in the collection.");
        }

        this.books.push({
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false,
        });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let currentBook = this.books.find((x) => x.bookName == bookName);

        if (!currentBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (currentBook.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        currentBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName) {
        let isFound = this.books.find((x) => x.bookName == bookName);

        if (!isFound) {
            throw new Error(`The book, you're looking for, is not found.`)
        }

        if (isFound.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        let indexOfBook = this.books.findIndex((x) => x.bookName == bookName)
        this.books.splice(indexOfBook, 1)
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        if (bookAuthor !== undefined) {

            let currBook = this.books.find((x) => x.bookAuthor == bookAuthor);
            if (!currBook) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
            if (currBook.payed == false) {
                return `${currBook.bookName} == ${bookAuthor} - Not Paid.`
            } else if (currBook.payed == true) {
                return `${currBook.bookName} == ${bookAuthor} - Has Paid.`
            }
        } else {
            let totalBooks = this.books.length
            let emptySlots = this.capacity - totalBooks
            let result = `The book collection has ${emptySlots} empty spots left.\n`
            let sortedBooks = this.books.sort((a, b) => {
                return a.bookName.localeCompare(b.bookName)
            })
            for (let book of sortedBooks) {
                if (book.payed == false) {
                    result += `${book.bookName} == ${book.bookAuthor} - Not Paid.\n`
                } else if (book.payed == true) {
                    result += `${book.bookName} == ${book.bookAuthor} - Has Paid.\n`
                }
            }
            return `${result.trim()}`
        }
    }
}
