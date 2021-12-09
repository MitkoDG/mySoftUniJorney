function oscarsWeekInCinema(input) {
    let movieName = input[0];
    let roomType = input[1];
    let ticketsNum = Number(input[2]);

    let ticketPrice = 0;


    switch (roomType) {
        case 'normal':
            if (movieName === 'A Star Is Born') {
                ticketPrice = 7.50;
            } else if (movieName === 'Bohemian Rhapsody') {
                ticketPrice = 7.35;
            } else if (movieName === 'Green Book') {
                ticketPrice = 8.15;
            } else if (movieName === 'The Favourite') {
                ticketPrice = 8.75;
            }
            break;
        case 'luxury':
            if (movieName === 'A Star Is Born') {
                ticketPrice = 10.50;
            } else if (movieName === 'Bohemian Rhapsody') {
                ticketPrice = 9.45;
            } else if (movieName === 'Green Book') {
                ticketPrice = 10.25;
            } else if (movieName === 'The Favourite') {
                ticketPrice = 11.55;
            }
            break;
        case 'ultra luxury':
            if (movieName === 'A Star Is Born') {
                ticketPrice = 13.50;
            } else if (movieName === 'Bohemian Rhapsody') {
                ticketPrice = 12.75;
            } else if (movieName === 'Green Book') {
                ticketPrice = 13.25;
            } else if (movieName === 'The Favourite') {
                ticketPrice = 13.95;
            }
            break;
    }
    let profit = ticketPrice * ticketsNum;

    console.log(`${movieName} -> ${profit.toFixed(2)} lv.`);
}
oscarsWeekInCinema(['A Star Is Born',
    'luxury',
    '42'
]);