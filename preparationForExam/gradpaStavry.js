function grandpa(input) {
    let days = Number(input[0]);

    let liters = 0;
    let temperature = 0;
    let end = input.length;

    let cur = '';
    for (let i = 1; i < end; i++) {
        cur = Number(input[i]);

        if (i % 2 === 1) {
            liters += cur;
        } else {
            temperature += cur * Number(input[i - 1]);
        }
    }

    let degrees = temperature / liters;
    
    console.log(`Liter: ${(liters).toFixed(2)}`);
    console.log(`Degrees: ${(degrees).toFixed(2)}`);

    if (degrees < 38) {
        console.log('Not good, you should baking!');
    } else if (degrees <= 42) {
        console.log('Super!');
    } else {
        console.log('Dilution with distilled water!');
    }
}
grandpa([])