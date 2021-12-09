function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentsNum = Number(input[2]);
    let nightsNum = Number(input[3]);

    let nightPrice = 0;
    let sportType = 0;

    switch (groupType) {
        case 'girls':
            if (season == 'Winter') {
                nightPrice = 9.60;
                sportType = 'Gymnastics';
            } else if (season == 'Spring') {
                nightPrice = 7.20;
                sportType = 'Athletics';
            } else if (season == 'Summer') {
                nightPrice = 15;
                sportType = 'Volleyball';
            }
            break;
        case 'boys':
            if (season == 'Winter') {
                nightPrice = 9.60;
                sportType = 'Judo';
            } else if (season == 'Spring') {
                nightPrice = 7.20;
                sportType = 'Tennis';
            } else if (season == 'Summer') {
                nightPrice = 15;
                sportType = 'Football';
            }
            break;
        case 'mixed':
            if (season == 'Winter') {
                nightPrice = 10;
                sportType = 'Ski';
            } else if (season == 'Spring') {
                nightPrice = 9.50;
                sportType = 'Cycling';
            } else if (season == 'Summer') {
                nightPrice = 20;
                sportType = 'Swimming';
            }
            break;
    }

    let accomodation = nightPrice * nightsNum * studentsNum;
    if (studentsNum >= 50) {
        accomodation = accomodation * 0.50;
    } else if (studentsNum >= 20 && studentsNum < 50) {
        accomodation = accomodation * 0.85;
    } else if (studentsNum >= 10 && studentsNum < 20) {
        accomodation = accomodation * 0.95;
    } else {
        accomodation = accomodation;
    }

    console.log(`${sportType} ${accomodation.toFixed(2)} lv.`);
}
schoolCamp(['Spring','girls','20','7']);