function account(input) {
    let totalSum = 0;
    let index = 0;
    let command = input[index];
    index++;
    while(command !== "NoMoreMoney"){
        let currentMoney = Number(command);
        if(currentMoney < 0){
            console.log("Invalid operation!");
            break;
        }
        console.log("Increase: " + currentMoney.toFixed(2));
        totalSum += currentMoney;
 
        command = input[index];
        index++;
    }
    console.log("Total: " + totalSum.toFixed(2));
}
account(["5.51", 
"69.42",
"100",
"NoMoreMoney"]);