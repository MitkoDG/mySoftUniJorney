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
