const cinema = require('./cinema.js');
const { expect, assert } = require('chai');

describe("Testing the cinema class", function () {
    describe("show movies function", function () {
        it("shold return no movies", function () {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.')
        });
        it("shold return no movies", function () {
            assert.equal(cinema.showMovies(['Gosho', 'Pesho']), 'Gosho, Pesho')

        });
        it("shold return no movies", function () {
            assert.equal(cinema.showMovies(['Gosho', 'Pesho', 'Pepa']), 'Gosho, Pesho, Pepa')
        });
    })
    describe("ticket price function", function () {
        it("check the input", function () {
            assert.equal(cinema.ticketPrice('Premiere'), '12.00')

        })
        it("check the input", function () {
            assert.equal(cinema.ticketPrice('Normal'), '7.50')
        })
        it("check the input", function () {
            assert.equal(cinema.ticketPrice('Discount'), '5.50')
        })
        it("check the input", function () {
            expect(()=>cinema.ticketPrice('test')).to.throw('Invalid projection type.')
        })
    })
    describe("swap seats function", function () {
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(5, 20), 'Successful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(20, 5), 'Successful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(5, 6), 'Successful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(6, 5), 'Successful change of seats in the hall.')

        })

        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(5.5, 5), 'Unsuccessful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(5, 5.5), 'Unsuccessful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(-2, 5), 'Unsuccessful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(5, -2), 'Unsuccessful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(21, 5), 'Unsuccessful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(5, 21), 'Unsuccessful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(5, 5), 'Unsuccessful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall('Pesho', 5), 'Unsuccessful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(5, 'Pesho'), 'Unsuccessful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(40, 30), 'Unsuccessful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(0, 0), 'Unsuccessful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(5, 0), 'Unsuccessful change of seats in the hall.')

        })
        it("check if numbers", function () {
            assert.equal(cinema.swapSeatsInHall(0, 5), 'Unsuccessful change of seats in the hall.')

        })
    })

});

