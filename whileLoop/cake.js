function cake(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++; 

    let cakeSize = w * l;

    let command = input[index];
    index++; // тук променяме към следващия индекс от масива. т.е. на следващата стъпка 

    let isCake = true;

    while (command !== "STOP") {
        let pieces = Number(command);

        cakeSize -= pieces;

        if (cakeSize < 0) {
            isCake = false;
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (isCake) {
        console.log(`${cakeSize} pieces are left.`);
    }
}
cake(["10","10","20","5","6","20","20","20","10","20","21"]);
