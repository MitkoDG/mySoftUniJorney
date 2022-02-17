let  cinema  = require("./solution.js");
let { assert } = require("chai");

describe("Testing the cinema class", function () {
  describe("testing showMovies method", function () {
    it("if there are movies to watch", function () {
      const arrOfMovies = ["film1", "film2", "film3", "film5"];
      assert.equal(cinema.showMovies(arrOfMovies), arrOfMovies.join(", "));
    });
    it("if there are no movies in the array", function () {
      assert.equal(cinema.showMovies([]), 'There are currently no movies to show.');
    });
  });
  describe("testing ticketPrice method", function () {
    it("if there is the projectionType", function () {
      assert.equal(cinema.ticketPrice("Normal"), 7.50);
    });
    it("if there is the projectionType", function () {
      assert.equal(cinema.ticketPrice("Premiere"), 12.00);
    });
    it("if there is the projectionType", function () {
      assert.equal(cinema.ticketPrice("Discount"),5.50);
    });
    it("if there is not the projectionType", function () {
      assert.throw( ()=> {cinema.ticketPrice("Normalaaa")}, Error, 'Invalid projection type.');
    });
  });
  describe("testing swapSeatsInHall method", function () {
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall(10), "Unsuccessful change of seats in the hall.");
    });
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall(10, "10"), "Unsuccessful change of seats in the hall.");
    });
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall("pepi", 10), "Unsuccessful change of seats in the hall.");
    });
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall({pepi:"pepi"}, 10), "Unsuccessful change of seats in the hall.");
    });
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall(["dawhat", "dada"], 10), "Unsuccessful change of seats in the hall.");
    });
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall(undefined, 10), "Unsuccessful change of seats in the hall.");
    });
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall(undefined, undefined), "Unsuccessful change of seats in the hall.");
    });
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall(10, 25), "Unsuccessful change of seats in the hall.");
    });
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall(25, 20), "Unsuccessful change of seats in the hall.");
    });
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall(10, 0), "Unsuccessful change of seats in the hall.");
    });
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall(0, 10), "Unsuccessful change of seats in the hall.");
    });
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall(10, -10), "Unsuccessful change of seats in the hall.");
    });
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall(10, 21), "Unsuccessful change of seats in the hall.");
    });
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall(-10, 10), "Unsuccessful change of seats in the hall.");
    });
    it("invalid input", function () {
      assert.equal(cinema.swapSeatsInHall(5, 5), "Unsuccessful change of seats in the hall.");
    });
    it("valid input", function () {
      assert.equal(cinema.swapSeatsInHall(1, 20), "Successful change of seats in the hall.");
    });
    it("valid input", function () {
      assert.equal(cinema.swapSeatsInHall(20, 18), "Successful change of seats in the hall.");
    });
  });
});
