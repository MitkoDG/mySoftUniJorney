function equalPairs(input) {
    let index = 0;
    let numOfPairs = Number(input[index++]);
    
    let firstNP = Number(input[index++]);
    let secondNP = Number(input[index++]);
    let previousPair = Number(firstNP+secondNP);
    let buffer = 0;
    let maxDiff = previousPair;
    let isValid = true;

    for (let n = 3; n <= numOfPairs*2; n+=2) {
        let firstN = Number(input[n]);
        let secondN = Number(input[n + 1]);
        buffer = Number(firstN+secondN)

        if (buffer === previousPair) {
            maxDiff = buffer;
        } else {
            newMaxDiff = Math.abs(buffer-previousPair);
            if (newMaxDiff > maxDiff) {
                maxDiff = newMaxDiff;
            }
            isValid=false;
        }

    }
    if (isValid) {
        console.log(`Yes, value=${maxDiff}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}
equalPairs(['4',
    '1',
    '1',
    '3',
    '1',
    '2',
    '2',
    '0',
    '0'
    ])