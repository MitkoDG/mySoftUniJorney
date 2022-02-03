const isOddOrEven = require("./exercises.js");
// const { assert } = require("mocha");
const { assert } = require("chai");

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
