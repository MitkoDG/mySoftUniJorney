function solve(input) { //100/100
    const barcodePattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    const digitPattern = /\d/;
    input.shift();

    input.forEach(el => {
        if (barcodePattern.test(el)) {
            const group = [...el]
                .filter(char => digitPattern.test(char))
                .join('');
            group.length > 0
                ? console.log(`Product group: ${group}`)
                : console.log(`Product group: 00`);
        } else {
            console.log('Invalid barcode');
        }
    });
}