// Write a function that receive a number and checks if that number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors. That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).

function findPerfectNumber(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (num === sum) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}
findPerfectNumber(6)