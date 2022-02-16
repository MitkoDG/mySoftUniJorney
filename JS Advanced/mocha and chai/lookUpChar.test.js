const lookupChar = require("./lookUpChar.js");
const { assert } = require("chai");

describe('lookupChar function test', () => {

    it('Return char at index', () => {
        assert(lookupChar('Love', 0) === 'L');
    });
    it('Index over the string length', () => {
        assert(lookupChar('Love', 10) === 'Incorrect index');
    });
    it('Negative string index', () => {
        assert(lookupChar('Love', -10) === 'Incorrect index');
    });


});



// with expect

// describe("look up char", () => {
//     it('should return undefined when the first input is not a string', () => {
//         //arrange phase
//         let expected = undefined;
//         //assert and act phase
//         expect(lookupChar(0, 0)).to.equal(expected);
//         expect(lookupChar(undefined, 0)).to.equal(expected);
//         expect(lookupChar(null, 0)).to.equal(expected);
//         expect(lookupChar([], 0)).to.equal(expected);
//         expect(lookupChar({}, 0)).to.equal(expected);
//     })
//     it('should return undefined when the second input is not an intiger', () => {
//         //arrange phase
//         let expected = undefined;
//         //assert  and act phase
//         expect(lookupChar('hello', "1")).to.equal(expected);
//         expect(lookupChar('hello', [])).to.equal(expected);
//         expect(lookupChar('hello', {})).to.equal(expected);
//         expect(lookupChar('hello', null)).to.equal(expected);
//         expect(lookupChar('hello', 4.4)).to.equal(expected);
//         expect(lookupChar('hello', '')).to.equal(expected);

//     })

//     it('should return "Incorrect Index" if the second param is out of range to the strings length', () => {
//         //arrange phase
//         let expected = "Incorrect index";
//         //assert and act phase
//         expect(lookupChar('hello', -1)).to.equal(expected);
//         expect(lookupChar('hello', 5)).to.equal(expected);
//         expect(lookupChar('hello', 100)).to.equal(expected);
//         expect(lookupChar('hello', -100)).to.equal(expected);
//         expect(lookupChar('', 0)).to.equal(expected);

//     })

//     it('should return the char of the string at the given index - happy case', () => {
//         //assert  and act phase
//         expect(lookupChar('hello', 0)).to.equal('h');
//         expect(lookupChar('hello', 4)).to.equal('o');
//         expect(lookupChar('hello', 3)).to.equal('l');
//     })


// })
