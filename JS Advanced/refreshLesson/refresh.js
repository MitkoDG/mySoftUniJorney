// function repeateTest(count) {
//     console.log("*".repeat(count));
// }
// repeateTest(5)

// function walk() {
//     console.log("Walking");
// }

// const walk = function () {
//     console.log("walking");
// }


// const walk = () => {
//     console.log("Walking");
// }

// walk()



// echo function

function echo(input) {
    let inputL = input.length

    console.log(inputL);
    console.log(input);

}
echo('Hello, JavaScript!')

// String Length

function countLength(str1, str2, str3) {
    let len1 = str1.length
    let len2 = str2.length
    let len3 = str3.length

    let totalLength = len1 + len2 + len3
    let avgL = Math.floor(totalLength / 3)

    console.log(totalLength);
    console.log(avgL);
}
countLength('chocolate', 'ice cream', 'cake')

// largestNumber
function largerNum(...params) {
    let result = Math.max(...params)
    console.log(`The largest number is ${result}.`);
}
largerNum(7, 11, 2)

// calculate circle area

function calculateArea(radius) {
    let type = typeof (radius)

    if (type === 'number') {
        let area = Math.PI * radius * radius
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
calculateArea(5)
calculateArea('name')

// Math operation

function mathOperation(num1, num2, operator) {

    let result

    switch (operator) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "/":
            result = num1 / num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "%":
            result = num1 % num2
            break;
        case "**":
            result = num1 ** num2
            break;
    }

    console.log(result);
}
mathOperation(5, 6, '+')

// sum of numbers

function sumOfNumber(a, b) {
    let num1 = Number(a);
    let num2 = Number(b);

    let sum = 0;

    for (let j = num1; j <= num2; j++) {
        sum += j
    }

    return console.log(sum);
}
sumOfNumber('1', '5')

// day of week

function dayOfWeek(input) {
    switch (input) {
        case "Monday":
            console.log("1");
            break;
        case "Tuesday":
            console.log("2");
            break;
        case "Wednesday":
            console.log("3");
            break;
        case "Thursday":
            console.log("4");
            break;
        case "Friday":
            console.log("5");
            break;
        case "Saturday":
            console.log("6");
            break;
        case "Sunday":
            console.log("71");
            break;
        default:
            console.log("error");
            break;
    }
}
dayOfWeek('Monday')

// day in a month

function dayMonth(month, year) {
    let days = new Date(year, month, 0).getDate();
    console.log(days);
}
dayMonth(1, 2012)


function starGraphic(num) {

    if (num !== undefined) {
        for (let i = 0; i < num; i++) {
            console.log("* ".repeat(num));
        }
    } else {
        for (let j = 0; j < 5; j++) {
            console.log("* ".repeat(5));

        }
    }
}
starGraphic()

function taskTen(nums) {
    
    let sum = 0;
    for (const num of nums) {
        sum+=num;
    }
    let invSum = 0
    for (const num of nums) {
       invSum+= 1/num; 
    }
    let concate = '';
    for (const num of nums) {
        concate+=num
    }
    console.log(sum);
    console.log(invSum);
    console.log(concate);
    
}
taskTen([1, 2, 3])