function figureArea(input) {
    let type = input[0];
    let sizeA = Number(input[1]);
    let sizeB = Number(input[2]);

    if (type === 'triangle') {
        console.log((sizeA * sizeB / 2).toFixed(3))
    } else if (type === 'rectangle') {
        console.log((sizeA * sizeB).toFixed(3))
    } else if (type === 'square') {
        console.log((sizeA * sizeA).toFixed(3));
    } else if (type === 'circle') {
        console.log((Math.PI * (sizeA * sizeA)).toFixed(3));
    }
}
figureArea(["square", "5"])

