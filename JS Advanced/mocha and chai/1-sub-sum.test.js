const expect = require('chai').expect;
const solve = require('./1-sub-sum');

describe('Sub-sum Calculator', () => {
    it('Should calculate sub-sum when endIndex is larger than length', () => {
        // Arrange
        let expectedSum = 150;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = 3;
        let endIndex = 300;

        // Act
        let actualSum = solve(numbers, startIndex, endIndex);

        // Assert
        // assert.equal(actualSum, expectedSum);
        expect(actualSum).to.equal(expectedSum);
    });

    it('Should calculate sub-sum when startIndex is lower than 0', () => {
        // Arrange
        let expectedSum = 60;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = -100;
        let endIndex = 2;

        // Act
        let actualSum = solve(numbers, startIndex, endIndex);

        // Assert
        // assert.equal(actualSum, expectedSum);
        expect(actualSum).to.equal(expectedSum);
    });

    it('Should return NaN when non array is provided for firt argument', () => {
        expect(solve(10, 1, 2)).to.be.NaN;
        expect(solve(null, 1, 2)).to.be.NaN;
        expect(solve(undefined, 1, 2)).to.be.NaN;
        expect(solve({}, 1, 2)).to.be.NaN;
        expect(solve(true, 1, 2)).to.be.NaN;
    });
})
