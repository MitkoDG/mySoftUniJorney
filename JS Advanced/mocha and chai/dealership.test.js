const dealership = require('./dealership');
const expect = require("chai").expect;
const assert = require('chai').assert;
// const {assert, expect} = require('chai')

describe('dealership.test.js', () => {
  describe('newCarCost', () => {
    it ('returns original price when model unsupported', ()=>{
        expect(dealership.newCarCost('a',1)).to.equal(1);
    })
    it ('returns discounted price', ()=>{
        assert.equal(dealership.newCarCost('Audi A4 B8',30000), 15000); // how to test it with assert
    })
  });
  describe('carEquipment', () => {
    // single element , single pick
    it('single element, single pick', () =>{
        expect(dealership.carEquipment(['a'],[0])).to.deep.equal(['a'])
    })
    it('single element, single pick', () =>{
        expect(dealership.carEquipment(['a', 'b','c'],[0, 2])).to.deep.equal(['a','c'])
    })
    it('single element, single pick', () =>{
        expect(dealership.carEquipment(['a', 'b','c'],[1])).to.deep.equal(['b'])
    })
    // test overloading = multiple elements, multiple picks

  });
  describe('euroCategory', () => {
      //category is bellow threshold
    it('category is below the threshold', () =>{
        expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!')
    })
    // ... is above threshold
    it('category is below the threshold', () =>{
        expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
    })
    it('category is below the threshold', () =>{
        expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
    })
    
    // ... is at threshold ( edge case )
  });
});