//03. Number Operations от JS Advanced Exam - 20 February 2021
describe('numberOperations object tests', () => {
    describe('powNumber Function tests', () => {
        it("should return the power of the given number", ()=>{
            assert.equal(numberOperations.powNumber(5),25)
        })
    });

    describe('numberChecker Function tests', () => {
        it('should throw error if the given input is not a number', () => {
            assert.throw(function(){ numberOperations.numberChecker("a")}, Error, "The input is not a number!");
            })
        
        it('should return string if the number is lower than 100', () => {
            assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!')
        });
        it('should return string if the number is lower than 100', () => {
            assert.equal(numberOperations.numberChecker("99"), 'The number is lower than 100!')
        });
        
        
        it('should return string if the number is greater to 100', () => {
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!')
        });
        it('should return string if the number is greater to 100', () => {
            assert.equal(numberOperations.numberChecker("101"), 'The number is greater or equal to 100!')
        });
        it('should return string if the number is equal to 100', () => {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
        });
    })

    describe('sumArrays function tests', () => {
        it('should return new array', () => {
            expect(numberOperations.sumArrays([1,2,5],[1,2,3])).to.eql([2,4,8])
        });

        it('should return new array', () => {
            expect(numberOperations.sumArrays([1,2,5,2,5],[1,2,3])).to.eql([2,4,8,2,5])
        });

        it('should return new array', () => {
            expect(numberOperations.sumArrays([1,2,5],[1,2,3,5,6])).to.eql([2,4,8,5,6])
        });
    });

});