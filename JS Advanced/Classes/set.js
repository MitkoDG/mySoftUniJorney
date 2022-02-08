let numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(1);

console.log(numbers);

if (numbers.has(1)) {
    console.log('There is one');
}