function movingTask(input){
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;

    let roomSize = w * l * h;
    let command = input[index];
    // index++;

    let sumCartons = 0;


    while (command !== 'Done') {
        
        let cartons = Number(input[index]);
        index++;
        sumCartons+= cartons;
        
        if ((roomSize - sumCartons) < 0) {
            console.log(`No more free space! You need ${Math.abs(roomSize - sumCartons)} Cubic meters more.`);
            break;
        }
        command = input[index];
    }
    if (command === 'Done') {
        console.log(`${roomSize - sumCartons} Cubic meters left.`);
    }

}
movingTask(["10",
"1",
"2",
"4",
"6",
"Done"]);

