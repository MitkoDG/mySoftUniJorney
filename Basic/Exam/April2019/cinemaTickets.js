function cinemaTickets(input) {
    let index = 0;
    let nextMovie = input[index++];
    let ticketsCounter = 0;
    let studentTicket = 0;
    let standardTicket = 0;
    let kidsTicket = 0;

    while (nextMovie !== 'Finish') {
        let freeSeats = Number(input[index++]);
        let currentTicket = input[index++];
        let availableTickets = freeSeats;
        while (currentTicket !== 'End') {
            if (currentTicket === 'student') {
                studentTicket++;
            } else if (currentTicket === 'standard') {
                standardTicket++;
            } else if (currentTicket === 'kid') {
                kidsTicket++;
            }
            availableTickets--;

            if (availableTickets === 0) {
                break;
            }
            currentTicket = input[index++];
        }

        let percentageFull = (((studentTicket + standardTicket + kidsTicket) / freeSeats) * 100).toFixed(2);
        console.log(`${nextMovie} - ${percentageFull}% full.`);
        nextMovie = input[index++];
    }
    let totalTickets = studentTicket + standardTicket + kidsTicket;
    let percentageStudent = ((studentTicket / totalTickets) * 100).toFixed(2);
    let percentageStandard = ((standardTicket / totalTickets) * 100).toFixed(2);
    let percentageKids = ((kidsTicket / totalTickets) * 100).toFixed(2);

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentageStudent}% student tickets.`);
    console.log(`${percentageStandard}% standard tickets`);
    console.log(`${percentageKids}% kids tickets.`);

}
cinemaTickets([
    "Taxi",
    "10",
    "standard", "kid", "student", "student", "standard", "standard", "End",
    "Scary Movie",
    "6",
    "student", "student", "student", "student", "student", "student", "Finish"]);