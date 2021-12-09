function vacation(input) {
    let buget = Number(input[0]);
    let season = input[1];

    let place = 0;
    let location = 0;
    let cost = 0;

    if (season === 'Summer') {
        location = 'Alaska'
        if (buget <= 1000) {
            place = 'Camp';
            cost = buget * 0.65;

        } else if (buget <= 3000) {
            place = 'Hut';
            cost = buget * 0.80;
        }else if (buget > 3000) {
            place = 'Hotel';
            cost = buget * 0.90;
        }

    } else if (season === 'Winter') {
        location = 'Morocco'
        if (buget <= 1000) {
            place = 'Camp';
            cost = buget * 0.45;

        } else if (buget <= 3000) {
            place = 'Hut';
            cost = buget * 0.60;
        }else if (buget > 3000) {
            place = 'Hotel';
            cost = buget * 0.90;
        }
    }
    console.log(`${location} - ${place} - ${cost.toFixed(2)}`);


}
vacation(["800", "Summer"]);
