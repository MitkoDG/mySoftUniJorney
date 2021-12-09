function agencyProfit(input) {
    let index = 0;
    let name = input[index];
    index++;
    let ticketsAdultPcs = Number(input[index]);
    index++;
    let ticketsKidsPcs = Number(input[index]);
    index++;
    let netPrice = Number(input[index]);
    index++;
    let taxRate = Number(input[index]);
    index++;

    let netPriceKids = netPrice * 0.30;
    let taxRatePlusAdult = netPrice + taxRate;
    let taxRatePlusKids = netPriceKids + taxRate;
    let totalAllTickets = (ticketsAdultPcs * taxRatePlusAdult) + (ticketsKidsPcs * taxRatePlusKids);
    let profit = (totalAllTickets * 0.20).toFixed(2);

    console.log(`The profit of your agency from ${name} tickets is ${profit} lv.`);

}
agencyProfit(['WizzAir',
    '15',
    '5',
    '120',
    '40']);