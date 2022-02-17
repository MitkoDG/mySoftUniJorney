describe('testing the testNumbers Object', () => {

    describe('sumNumbers function', () => {

        it('should return undefined', () => {
            expect(testNumbers.sumNumbers('string', 2)).to.equal(undefined)
            expect(testNumbers.sumNumbers(2, 'string')).to.equal(undefined)
        });
        it('should return a specific sum', () => {
            expect(testNumbers.sumNumbers(5, 6)).to.equal('11.00');
            expect(testNumbers.sumNumbers(2, 8)).to.equal('10.00');
            expect(testNumbers.sumNumbers(2, 8.50)).to.equal('10.50');
        });
    });

    describe('numberChecker function', () => {

        it('should throw an Error if the input is NaN', () => {
            expect(() => testNumbers.numberChecker('string')).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker({ a: 5, b: 6 })).to.throw('The input is not a number!');
        });
        it('return if number is even', () => {
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
        });
        it('return if number is odd', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        });
    })

    describe('averageSumArray function', () => {

        it('should sum the aray', () => {
            let arr = [1, 2, 3, 4, 5, 5, 1];
            expect(testNumbers.averageSumArray(arr)).to.equal(3);
            arr = [1, 2, 3, 4, 5, 4, 2];
            expect(testNumbers.averageSumArray(arr)).to.equal(3);
        });
    });
});