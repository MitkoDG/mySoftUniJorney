
// let a = 5;

// function app(a) {

//     a = 5 * 2;
// }
// app();

// let b = a;
// console.log(b === a);
// console.log(b);


// function calculateBirthDate(egn) {
//     const year = egn.substring(0, 2);
//     const month = egn.substring(2, 4);
//     const day = egn.substring(4, 6);

//     let birthYear;

//     if (year >= 0 && year <= 20) {
//         birthYear = 2000 + parseInt(year);
//     } else {
//         birthYear = 1900 + parseInt(year);
//     }

//     console.log(`${day}/${month}/${birthYear}`);
// }

// calculateBirthDate('8308200021');

// function calculateBirthday(egn) {
//     const day = parseInt(egn.substring(4, 6));
//     const month = parseInt(egn.substring(2, 4));
//     const year = parseInt(egn.substring(0, 2));

//     const date = new Date(`${year}-${month}-${day}`);

//     console.log(date.toLocaleString('bg-BG', { weekday: 'long' }));
// };
// calculateBirthday('8308200021');

// var twoSum = function (nums, target) {
//     // const target = target;
//     let totalSum = 0;
//     const indexes = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (target >= (totalSum + nums[i])) {
//             totalSum += nums[i];
//             indexes.push(i)
//         }
//     }
//     console.log(indexes);
// };

var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            console.log([map.get(complement), i]);
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};
twoSum([2, 15, 11, 7], 9);
twoSum([3,2,4], 6);