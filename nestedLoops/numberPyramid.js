function numberPyramid(input) {
    let n = Number(input[0]);
    let printNumber = 1;
    let isFinish = false;
    // let rows = 0;

    // while ( !isFinish) {}
    for (let rows = 0; rows <= n; rows++) {
        let buffer = "";
        for (let cols = 0; cols <= rows; cols++) {
            buffer += printNumber + " ";

            if (printNumber === n) {
                isFinish = true;
                break;
            }
            printNumber++;
        }
        // rows++; и оставям само печатенето ( алтернатива с while )

        console.log(buffer);
        if (isFinish) {
            break;
        }
    }
}
numberPyramid(["15"]);