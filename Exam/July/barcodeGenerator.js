function barcodeGenerator(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);

    let buffer = "";

    for (let num = start; num <= end; num++) {
        let tempNum = num + "";
        let tempChecked = true;
        for (let check = 0; check < tempNum.length; check++) {
            let numToCheck = Number(tempNum[check])
        
            if (numToCheck % 2 == 0) {
                tempChecked = false;
                break;
            }
        }
        if (tempChecked){
            buffer += tempNum + " ";
        }
    }
    console.log(buffer);
}
barcodeGenerator(["3256",
    "6579"]);

    