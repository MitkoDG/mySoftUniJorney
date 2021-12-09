function timeAfterMinutes(input) {
    let incomeH = Number(input[0]);
    let incomeM = Number(input[1]);

    let totalTimeInMin = incomeH * 60 + incomeM;
    totalTimeInMin = totalTimeInMin + 15;

    let h = Math.floor( totalTimeInMin / 60 );
    let m = totalTimeInMin % 60;

    if ( h > 23) {
        h = 0;
    }

    if ( m < 10) {
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`);
    }

}
timeAfterMinutes(["23", "59"]);