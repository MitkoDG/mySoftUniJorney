function whetherForecast(input) {
    let whether = (input[0]);

    if (whether >= 26) {
        console.log(`Hot`);
    } else if (whether >= 20.1) {
        console.log(`Warm`);
    } else if (whether >= 15) {
        console.log(`Mild`);
    } else if (whether >= 12) {
        console.log(`Cool`)
    } else if (whether >= 5 ) {
        console.log(`Cold`)
    } else {
        console.log(`unknown`)
    }
}
whetherForecast(['0']);