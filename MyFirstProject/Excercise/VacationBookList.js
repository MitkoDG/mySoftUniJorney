function vacationBookList(input){
    let countPages = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let countDays = Number(input[2]);

    let totalTimeReadBook = countPages / pagesForHour;
    let readForOneDay = totalTimeReadBook / countDays;

    console.log(readForOneDay)

}
vacationBookList(["212","20","2"]);
