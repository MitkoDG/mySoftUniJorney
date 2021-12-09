function cinemaTickets(input) {
    let standardTickets = 0;
    let studentTickets = 0;
    let kidsTickets = 0;
    let index = 0;
    let inputLine = input[index++];

    while (inputLine !== 'Finish') {
        let movieName = inputLine;
        let allTickets = Number(input[index++]);
        let availableTickets = allTickets;
        let ticketType = input[index++];

        while (ticketType !== 'End') {
            if (ticketType === 'standard') {
                standardTickets++;
            } else if (ticketType === 'student') {
                studentTickets++;
            } else if (ticketType === 'kid') {
                kidsTickets++;
            }
            availableTickets--;

            if (availableTickets === 0) {
                break;
            }

            ticketType = input[index++];
        }
        let boughtTickets = allTickets - availableTickets;
        let percentageFull = boughtTickets / allTickets * 100;

        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
        inputLine = input[index++];
    }

    let totalTickets = standardTickets +studentTickets + kidsTickets;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets([
    "Taxi",
    "10",
    "standard", "kid", "student", "student", "standard", "standard", "End",
    "Scary Movie",
    "6",
    "student", "student", "student", "student", "student", "student", "Finish"]);