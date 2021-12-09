function cakeMe(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;

    let totalSize = w * l;

    let command = input[index];
    let isEnough = true;

    while (command !== 'STOP') {
        let currentNum = Number(input[index]);
        totalSize -= currentNum;
        if (totalSize < 0) {
            isEnough = false;
            console.log(`No more cake left! You need ${Math.abs(totalSize)} pieces more.`);
            break;
        }
        index++;
        command = input[index];

    }
    if (isEnough) {
        console.log(`${totalSize - sum} pieces are left.`);
    } else {

    }
}
cakeMe(["10","10","20","5","6","20","20","20","10","20","21"]);