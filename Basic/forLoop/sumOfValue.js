function vowelsSum(input) {

    let wordForSum = input[0];
    let sum = 0;
    let wordL = wordForSum.length;

    for (let i = 0; i < wordL; i++) {
        let letter = wordForSum[i];
        switch (letter) {
            case "a": sum += 1;
                break;
            case "e": sum += 2;
                break;
            case "i": sum += 3;
                break;
            case "o": sum += 4;
                break;
            case "u": sum += 5;
                break;
        }

    }

    console.log(sum)
}
vowelsSum(["heloo"])