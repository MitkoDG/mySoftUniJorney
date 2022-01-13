function previousDay(year, month, day) {
    
    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);

    date.setDate(date.getDate()-1)
    
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);

}
previousDay(2016, 9, 30)

function prevDay(year, month, day) {
    if (day === 1) { 
        day = day - 1;
        month = month - 1; 
 
    } else {
        day = day - 1;
    }
 
    let date = new Date(year, month, day);
 
    let output = `${year}-${month}-${date.getDate()}`;
    console.log(output);
}
prevDay(2016, 9, 30)