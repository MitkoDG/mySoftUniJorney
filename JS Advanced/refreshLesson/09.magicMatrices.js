function magicMatrices(input) {
    let magicSum = input[0].reduce((acc, num) => acc + num);
    let inputL = input.length;
    for (let i = 0; i < inputL; i++) {
        let lineSum = input[i].reduce((acc, num) => acc + num);
        let colSum = 0
        if (lineSum !== magicSum) {
            // console.log('false');
            return false;
        } else {
            for (let j = 0; j < inputL; j++) {
                colSum += input[i][j];
            }
        }
        if (colSum !== magicSum) {
            // console.log('false');
            return false
        }
    }
    // console.log('true');
    return true
}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);
magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
)
magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
)


// alternative solution
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
