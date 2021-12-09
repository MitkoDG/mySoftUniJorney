function divideWithoutRemain(input) {
    let qty = Number(input[0]);

    let counterP1 = 0;

    let counterP2 = 0;
   
    let counterP3 = 0;
    
    for (let n = 1; n <= qty; n++) {
        let currentN = Number(input[n]);
        if (currentN % 2 === 0) {
            counterP1 += 1;
        } 
        if (currentN % 3 === 0) {
            counterP2 += 1;
        } 
        if (currentN % 4 === 0) {
            counterP3 += 1;
        }
    }

    p1 = (counterP1 / qty) * 100;
    p2 = (counterP2 / qty) * 100;
    p3 = (counterP3 / qty) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}
divideWithoutRemain(["10","680","2","600","200","800","799","199","46","128","65"]);