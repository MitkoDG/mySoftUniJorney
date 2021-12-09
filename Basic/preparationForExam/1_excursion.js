function solve(input) {

    let groupPeople = Number(input[0]);
    let nights = Number(input[1]);
    let transportCards = Number(input[2]);
    let museumTickets = Number(input[3]);

    // •	Нощувка - 20 лв.
    // •	Карта за транспорт - 1.60 лв.
    // •	Билет за музей - 6 лв.

    let nightsStayPerOne = nights * 20;
    let transportCardsPrice = transportCards * 1.6;
    let museumTicketsPrice = museumTickets * 6;
    let totalSumForOne = nightsStayPerOne + transportCardsPrice + museumTicketsPrice;
    let totalSumForGroup = groupPeople * totalSumForOne;
    let totalMoney = totalSumForGroup * 1.25;

    console.log(totalMoney.toFixed(2));
}

solve(["131",
    "9",
    "33",
    "46"])