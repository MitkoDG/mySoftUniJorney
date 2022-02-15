let isOddOrEven = require('./index.js');
const expect = require("chai").expect;
const assert = require('chai').assert;

// describe('test',()=>{
//     it('test 1',()=>{

//     })
// })

describe("isOddOrEven function tests", () => {
    //invalid input
    it("should return undefined if the parameter is number", () => {
      assert.equal(isOddOrEven(10), undefined);
    });
    it("should return undefined if the parameter is object", () => {
      assert.equal(isOddOrEven({}), undefined);
    });
    it("should return undefined if the parameter is array", () => {
      assert.equal(isOddOrEven([]), undefined);
    });
    it("should return undefined if the parameter is undefined", () => {
      assert.equal(isOddOrEven(undefined), undefined);
    });
    // valid input
    it("should return even as result", () => {
      assert.equal(isOddOrEven("Hi"), 'even');
    });
    // it("should return odd as result", () => {
    //   assert.equal(isOddOrEven("Hi"), 'odd');
    // });
  });