function reception(arr){
    let studentsPerHour = arr.slice(0,3).map(Number).reduce((a,b)=> a+b);
    let answers = arr.pop()
    let answeredStudents = 0;
    let hours = 0

    while (answeredStudents < answers ) {

        if (hours % 4 === 0 && hours !== 0) {
            hours++;
            continue;
        }
        answeredStudents+=studentsPerHour
        hours++
        
    }
    if (hours % 4 === 0 && hours !== 0) {
        hours++;
        
    }
    console.log(`Time needed: ${hours}h.`);

}
reception(['5','6','4','20'])
reception(['1','2','3','45'])
reception(['3','2','5','40'])