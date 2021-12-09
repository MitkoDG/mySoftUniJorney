// function lettersComb(input) {
//     let first = input[0];
//     let second = input[1];
//     let third = input[2];

//     for (let i = 0; i < 3; i++) {
//         for (let s = 0; s < 3; s++) {
            
            
//         }
        
//     }


// }
// lettersComb(['a',
//     'c',
//     'b'])

function lettersComb(input) {
    // let first = input.shift();
    // let second = input.shift();
    // let skiped = input.shift();

    let first = input.shift().charCodeAt(0);
    let second = input.shift().charCodeAt(0);
    let skiped = input.shift();

    let array = [];
    let count = 0;
    let g = "";
    for (let i = first; i <= second; i++) {
        for (let j = first; j <= second; j++) {
            for (let k = first; k <= second; k++) {
                let firstLetter = String.fromCharCode(i);
                let secondLetter = String.fromCharCode(j);
                let thirdLetter = String.fromCharCode(k);

                // if (i !== skiped || j !== skiped || k !== skiped) { Use &&, || will not work
                if (firstLetter !== skiped && secondLetter !== skiped && thirdLetter !== skiped) {

                    count++;
                    // g += (i + j + k) + " ";
                    g += (firstLetter + secondLetter + thirdLetter) + " ";
                    array.push(firstLetter + secondLetter + thirdLetter);

                }
            }
        }

    }
    // console.log(g);
    // console.log(count);
    array.push(count);
    console.log(array.join(' '));
}
lettersComb(['a',
    'c',
    'b']);