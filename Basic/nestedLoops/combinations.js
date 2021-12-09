function combinations(input) {
    let x = Number(input[0]);

    let counter = 0

    for (let a = 0; a <= x; a++) {
        for (let b = 0; b <= x; b++) {
            for (let c = 0; c <= x; c++) {
                let result = a + b + c;
                if (result === x) {
                    counter++;
                }

            }

        }

    }

    console.log(counter);

}
combinations([5]);