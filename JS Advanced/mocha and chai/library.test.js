const library = require('./library.js');
const { expect, assert } = require('chai');

describe("Testing the calcPriceOfBook", function () {
    describe("Testing the calcPriceOfBook", function () {
        it('testing the calcPriceOfBook', () => {
            expect(() => library.calcPriceOfBook(2, 2000)).to.throw("Invalid input");
        })
        it('testing the calcPriceOfBook', () => {
            expect(() => library.calcPriceOfBook('string', 20.20)).to.throw("Invalid input");
        })
        it('testing the calcPriceOfBook', () => {
            expect(() => library.calcPriceOfBook(2, 20.20)).to.throw("Invalid input");
        })
        //valid year
        it('testing the calcPriceOfBook', () => {
            expect(library.calcPriceOfBook('test', 1870)).to.equal(`Price of test is 10.00`);
        })
        it('testing the calcPriceOfBook', () => {
            expect(library.calcPriceOfBook('test', 1980)).to.equal(`Price of test is 10.00`);
        })
        it('testing the calcPriceOfBook', () => {
            expect(library.calcPriceOfBook('test', 2020)).to.equal(`Price of test is 20.00`);
        })
    })
    describe("Testing the findBook", function () {
        // it('testing the findBook', () => {
        //     expect(library.findBook([], '')).to.equal(`Price of test is 10.00`);
        // })
        it('testing the findBook', () => {
            expect(() => library.findBook([], 'test')).to.throw("No books currently available");
        })
        it('testing the findBook', () => {
            expect(library.findBook(['test'], 'test')).to.equal("We found the book you want.");
        })
        it('testing the findBook', () => {
            expect(library.findBook(['test'], 'test2')).to.equal("The book you are looking for is not here!");
        })
    })

    describe("Testing the arrangeTheBooks", function () {
        it('testing the arrangeTheBooks', () => {
            expect(() => library.arrangeTheBooks(5.5)).to.throw("Invalid input");
        })
        it('testing the arrangeTheBooks', () => {
            expect(() => library.arrangeTheBooks(-5)).to.throw("Invalid input");
        })
        it('testing the arrangeTheBooks', () => {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        })
        it('testing the arrangeTheBooks', () => {
            expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
        })
        it('testing the arrangeTheBooks', () => {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        })
    })
})