function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let lines = Number(input[2]);

    let income = 0;
    if (type === 'Premiere') {
        income = rows * lines * 12;
    } else if (type === 'Normal') {
        income = rows * lines * 7.5;
    } else if (type === 'Discount') {
        income = rows * lines * 5;
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Premiere",
"10",
"12"]);