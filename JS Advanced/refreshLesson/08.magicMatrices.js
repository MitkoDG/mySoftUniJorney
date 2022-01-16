function magicMatrices(inputMatrix) {
    let magicSum = inputMatrix[0].reduce((acc, curr) => acc + curr);
    let isMagicMatrix = true;

    for (let row = 0; row < inputMatrix.length; row++) {
        let currentRowSum = inputMatrix[row].reduce((acc, curr) => acc + curr);
        let currentColSum = 0;

        if (currentRowSum != magicSum) {
            isMagicMatrix = false;
            return false;
        }

        for (let col = 0; col < inputMatrix.length; col++) {
            currentColSum += inputMatrix[col][row];
        }

        if (currentColSum != magicSum) {
            isMagicMatrix = false;
            return false;
        }
    }

    return true;
}
magicMatrices()