function dogExpensses(input) {
    let dogPrice = Number(input[0]) * 2.5;
    let otherPrice = Number(input[1]) * 4;
    let total = dogPrice + otherPrice;

    console.log(`${total} lv.`);

}
dogExpensses(['13', '9']);