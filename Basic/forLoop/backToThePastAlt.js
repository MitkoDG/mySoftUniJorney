function backToPast(input) {
 
    let money = Number(input[0]);
    let year = Number(input[1]);
    let age = 18;
    let countermoney = Number(input[0])
 
 
    for (i = 1800; i <= year; i++) {
        if (i % 2 === 0) {
            countermoney -= 12000
        } else {
            countermoney -= 12000 + (50 * age)
        } age++
    }
 
    if (countermoney <= money && countermoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${countermoney.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${Math.abs(countermoney.toFixed(2))} dollars to survive.`);
    }
 
}