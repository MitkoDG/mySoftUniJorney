function figureArea(input) {
    let type = input[0];

    if (type === 'triangle') {
        let sizeA = Number(input[1]);
        let sizeB = Number(input[2]);
        let result = sizeA * sizeB;
        console.log(result);
    }
}
figureArea(["triangle", "5", '4'])