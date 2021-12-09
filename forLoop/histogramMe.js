function histogram(input) {

    let numbers = Number(input[0]);

    let p1 = 0;
    let p1Counter = 0;
    let p2 = 0;
    let p2Counter = 0;
    let p3 = 0;
    let p3Counter = 0;
    let p4 = 0;
    let p4Counter = 0;
    let p5 = 0;
    let p5Counter = 0;

    for (startIndex = 1; startIndex <= numbers; startIndex++) {
        let number = Number(input[startIndex]);

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

    p1= (p1Counter / numbers) * 100;
    p2= (p2Counter / numbers) * 100;
    p3= (p3Counter / numbers) * 100;
    p4= (p4Counter / numbers) * 100;
    p5= (p5Counter / numbers) * 100;
    
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
histogram(["7",
    "800",
    "801",
    "250",
    "199",
    "399",
    "599",
    "799"]);