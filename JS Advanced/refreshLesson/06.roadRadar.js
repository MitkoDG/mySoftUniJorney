function roadRadar(speed, area) {
    let difference = 0;
    let isSpeeding = false;
    let speedLimit = 0;

    if (area == 'residential') {
        speedLimit = 20;
        difference = speedLimit - speed;
        if (difference < 0) {
            isSpeeding = true;
        }
    } else if (area == 'city') {
        speedLimit = 50;
        difference = speedLimit - speed;
        if (difference < 0) {
            isSpeeding = true;
        }
    } else if (area == 'interstate') {
        speedLimit = 90;
        difference = speedLimit - speed;
        if (difference < 0) {
            isSpeeding = true;
        }
    } else if (area == 'motorway') {
        speedLimit = 130;
        difference = speedLimit - speed;
        if (difference < 0) {
            isSpeeding = true;
        }
    }
    difference = Math.abs(difference)
    let status = ""
    if (difference > 40) {
        status = 'reckless driving';
    } else if (difference > 20) {
        status = 'excessive speeding';
    } else {
        status = 'speeding';
    }

    if (isSpeeding) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
}
roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')