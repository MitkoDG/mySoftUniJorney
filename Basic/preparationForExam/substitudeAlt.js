function changes(input) {
    let index = 0;
    let k = Number(input[index++]);
    let l = Number(input[index++]);
    let m = Number(input[index++]);
    let n = Number(input[index++]);

    let isPossible = false;
    let currentcombination = 6;

    while (currentcombination > 0) {

        for (let start = k; start <= 8; start++) {
            if (start % 2 === 0) {
                for (let start12 = 9; start12 >= l; start12--) {
                    if (start12 % 2 !== 0) {
                        for (let start2 = 8; start2 <= m; start2++) {
                            if (start2 % 2 === 0) {
                                for (let start22 = 9; start22 >= n; start22--) {
                                    if (start22 % 2 !== 0) {
                                        currentcombination--;
                                        //console.log(`${start}${start12} + ${start2}${start22}`);
                                        let firstN = `${start}${start12}`;
                                        let secondN = `${start2}${start22}`;

                                        if (firstN === secondN) {
                                            break;
                                        } else {
                                            console.log(`${start}${start12} + ${start2}${start22}`);
                                            isPossible = true;
                                        }
                                        if (!isPossible) {
                                            console.log("Cannot change the same player.");
                                            isPossible = false;
                                            break;
                                        }

                                    }
                                }
                                if (isPossible) {
                                    break;
                                }
                            }
                        }
                        if (isPossible) {
                            break;
                        }
                    }
                }
            }
        }
    }


}
changes(["7", "6", "8", "5"]);