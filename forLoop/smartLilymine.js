function smartLili(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let counterMoney = 0;
    let counterToys = 0;
    let savedMoney = 0;
    let income = 0;


    for (let a = 1; a <= age; a++) {
        if (a % 2 !== 0) {
            counterToys++;
        } else {
            counterMoney++;
            savedMoney+=10;
            income+=savedMoney;
        }
    }

    let moneyFromToys = counterToys * toyPrice;
    let finalIncome = income + moneyFromToys - counterMoney;

    if ( finalIncome >= washingMachinePrice){
        let rest = finalIncome - washingMachinePrice;
        console.log(`Yes! ${rest.toFixed(2)}`);
    } else {
        let rest = washingMachinePrice - finalIncome;
        console.log(`No! ${rest.toFixed(2)}`);
    }

}
smartLili(["21", "1570.98", "3"]);