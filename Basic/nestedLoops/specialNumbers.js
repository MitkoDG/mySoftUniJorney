function specialNumbers(input) {
    let n = Number(input[0]);
    let buffer = "";

    for (let a = 1; a <= 9; a++) {
        for (let b = 0; b <= 9; b++) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 0; d <= 9; d++) {
                    if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0) {
                        buffer += " " + a + b + c + d;
                    }

                }

            }

        }

    }
    console.log(buffer);
}
specialNumbers(["3"]);