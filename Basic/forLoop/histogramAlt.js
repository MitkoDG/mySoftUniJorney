function histogram(input){
    let numbers = Number(input[0]);  // how many numbers I should expect as an input
 
    p1 = 0;  // less than 200
    p1Counter = 0;
 
    p2 = 0;  // 200 to 399
    p2Counter = 0;
 
    p3 = 0;  // 400 to 599
    p3Counter = 0;
 
    p4 = 0;  // 600 to 799
    p4Counter = 0;
 
    p5 = 0;  // above 800
    p5Counter = 0;
 
    // I will make a for loop which will start with index 1 because from there the numbers which I will check are located
    // The loop's end will be the number of the variable called numbers
    // for example, if I have [3, 35, 50, 200] after the index of "3" which is 0, I will have exactly 3 steps and 3 numbers
 
    for (let startNumberIndex = 1; startNumberIndex <= numbers; startNumberIndex++) {
        let number = Number(input[startNumberIndex]);  // this number will be at the index after the variable called numbers
 
        if (number < 200) {
            p1Counter += 1;
        }
        else if (number <= 399) {
            p2Counter += 1;
        }
        else if (number <= 599) {
            p3Counter += 1;
        }
        else if (number <= 799) {
            p4Counter += 1;
        }
        else {
            p5Counter += 1;
        }
 
    }
 
    p1 = (p1Counter / numbers) * 100;
    p2 = (p2Counter / numbers) * 100;
    p3 = (p3Counter / numbers) * 100;
    p4 = (p4Counter / numbers) * 100;
    p5 = (p5Counter / numbers) * 100;
 
    console.log(`${p1.toFixed(2)}%`)
    console.log(`${p2.toFixed(2)}%`)
    console.log(`${p3.toFixed(2)}%`)
    console.log(`${p4.toFixed(2)}%`)
    console.log(`${p5.toFixed(2)}%`)
 
}
histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])


