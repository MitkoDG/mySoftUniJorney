function sleepyCat(input) {
    let dayOffDays = Number(input[0]);
    let workDayPlayTime = 63;
    let dayOffPlayTime = 127;
    let norme = 30000;
    

    let playTimeOff = dayOffDays * dayOffPlayTime;
    let playWorkDay = (365 - dayOffDays) * workDayPlayTime;
    let totalForTheYearMin = playTimeOff + playWorkDay;
    let normeResult = norme - totalForTheYearMin;
    let hours = Math.trunc(normeResult / 60);
    let min = normeResult % 60;

    if (norme > totalForTheYearMin) {
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${min} minutes less for play`);
    } else {
        console.log(`Tom will run away`);

        console.log(`${Math.abs(hours)} hours and ${Math.abs(min)} minutes more for play`);
    }
    
}

sleepyCat(['113']);