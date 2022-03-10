const library = require('./library.js');
const { expect, assert } = require('chai');

describe('Testing the Library', function () {
    describe('Testing the calcPriceOfBook', function () {
        it('testing the calcPriceOfBook string number', ()=>{
            expect(()=> library.calcPriceOfBook(2, 'string')).to.throw("Invalid input")
            expect(()=> library.calcPriceOfBook(2, 20)).to.throw("Invalid input")
            expect(()=> library.calcPriceOfBook(2, 20.20)).to.throw("Invalid input")
        })
        it('testing the calcPriceOfBook year <= 1980', ()=>{
            expect(library.calcPriceOfBook('string', 1980)).to.equal('Price of string is 10.00')
            expect(library.calcPriceOfBook('string', 1880)).to.equal('Price of string is 10.00')
        })
        it('testing the calcPriceOfBook year > 1980', ()=>{
            expect(library.calcPriceOfBook('string', 2000)).to.equal('Price of string is 20.00')
        })

    })
    describe('Testing the findBook', function () {
        it('testing the findBook book length = 0', ()=>{
            expect(()=> library.findBook('', 2)).to.throw("No books currently available")

        })
        it('testing the findBook', ()=>{
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal('We found the book you want.')
        })
        it('testing the findBook not found', ()=>{
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'string')).to.equal('The book you are looking for is not here!')
        })

    })
    describe('Testing the arrangeTheBooks', function () {
        it('testing the arrangeTheBooks', ()=>{
            expect(()=> library.arrangeTheBooks('2')).to.throw("Invalid input")
            expect(()=> library.arrangeTheBooks(-1)).to.throw("Invalid input")

        })
        it('testing the arrangeTheBooks', ()=>{
            expect(library.arrangeTheBooks(5)).to.equal('Great job, the books are arranged.')
            expect(library.arrangeTheBooks(3)).to.equal('Great job, the books are arranged.')
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.')
        })
        it('testing the arrangeTheBooks', ()=>{
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.')
        })

    })
})