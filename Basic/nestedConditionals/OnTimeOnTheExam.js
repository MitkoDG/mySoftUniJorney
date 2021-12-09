function onTimeExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let totalMinExam = (examHour * 60) + examMinute;
    let totalMinArrival = (arrivalHour * 60) + arrivalMinute;
    let isItLate = 0;
    let diffTime = Math.abs(totalMinArrival - totalMinExam);
    let result = 0;

    if (totalMinArrival > totalMinExam) {
        console.log("Late");
        if (diffTime >= 60) {
            let h = Math.floor(diffTime / 60);
            let m = diffTime % 60;
            if (m > 10) {
                console.log(`${h}:${m} hours after the start`);
            } else {
                console.log(`${h}:0${m} hours after the start`);
            }
        } else if (diffTime < 60) {
            console.log(`${totalMinArrival - totalMinExam} minutes after the start`);
        }
    } else if (totalMinArrival <= totalMinExam && totalMinExam - totalMinArrival <= 30) {
        console.log('On time');
        if (totalMinExam - totalMinArrival !== 0) {
            console.log(`${diffTime} minutes before the start`);
        }



    } else {
        console.log('Early');
        let h = Math.floor(diffTime / 60);
        let m = diffTime % 60;
        if (diffTime < 60) {
            console.log(`${m} minutes before the start`);
        } else if ( m < 10 ) {
            console.log(`${h}:0${m} hours before the start`);
        }
        if ( diffTime > 60 ){
            console.log(`${h}:${m} hours before the start`);
        }
    }
}


onTimeExam(["16",
"00",
"15",
"00"])
;