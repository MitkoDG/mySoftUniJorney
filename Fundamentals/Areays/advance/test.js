function arraysDemo() {
  let arr = [1, 2, 3, 4, 5];

  let firstElement = arr.shift(); // remove the first element and return it
  let lastElement = arr.pop(); // remove the last element and return it

  arr.push(999); // add el on last index
  arr.unshift(-100); // add element at the beggining

  let indexOfElement = arr.indexOf(3); // find which index of 3 is on
  arr.splice(indexOfElement, 0, 999); // which index, how many element to remove, what to add as number

  let isInArr = arr.includes(2); // return "true"/'false'

  let index = arr.indexOf(3);
  let arr2 = arr.slice(index, index + 1);

  let arr3 = ["5", "123", "55", "11"];

  let mappingOfarr3 = arr3.map((el) => {
    return Number(el);
  });
  // console.log(mappingOfarr3);
  let arrAsNumbers = arr3.map(Number)
  let mapped = arrAsNumbers.map(x => x+1)
  // console.log(mapped);

let newArr = arr.filter((el)=>{
    if (el % 2 === 0) {
        return el;
    }
})
let sum = arr.reduce((sum,el )=>{
    return Number(sum)+Number(el);
},[])
// console.log(sum);

let sortedArr = arr3.sort((a,b)=>{
    return a - b; // return a.length - b.length || a.localCompare(b);
    // returna a.localeCompare(b)
    
})
// console.log(sortedArr);
}
arraysDemo();

function testing(input) {
    
  const sum = input.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
  },0)
  // console.log(sum);
}
testing([1, -1, 3, 5])
