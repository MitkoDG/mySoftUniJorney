function pipesInPool(input) {
    let poolVolume = Number(input[0]);
    let firstPipeDebit = Number(input[1]);
    let secondPipeDebit = Number(input[2]);
    let emploeeMissingH = Number(input[3]);

    let resultFirstPipe = firstPipeDebit * emploeeMissingH;
    let resultSecondPipe = secondPipeDebit * emploeeMissingH;
    let totalBothPipe = resultFirstPipe + resultSecondPipe;
    let percentageBothPipe = (totalBothPipe * 100 / poolVolume).toFixed(2);
    let firstPipeContribute = (resultFirstPipe * 100 / totalBothPipe).toFixed(2);
    let secondPipeContribute = (resultSecondPipe * 100 / totalBothPipe).toFixed(2);

    if (totalBothPipe > poolVolume) {
        console.log(`For ${emploeeMissingH} hours the pool overflows with ${(totalBothPipe - poolVolume).toFixed(2)} liters.`);
    } else {
        console.log(`The pool is ${percentageBothPipe}% full.Pipe 1: ${firstPipeContribute}%.Pipe 2: ${secondPipeContribute}%.`);
    }
}

pipesInPool(['100',
    '100',
    '100',
    '2.5'
])