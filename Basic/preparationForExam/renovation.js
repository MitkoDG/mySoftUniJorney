function renovation(input) {
    let height = Number(input[0]);
    let width = Number(input[1]);
    let doors = Number(input[2]) / 100;
    let area = Math.ceil((1-doors) * height * width * 4);
    let areaLeftToPaint = area;
 
    let index = 3;
    let command = input[index];
    index++;
	let booFlag = true;
	 while(command !== 'Tired!') {
        let paintLiters = Number(command);
        areaLeftToPaint = areaLeftToPaint - paintLiters;
 
        if (areaLeftToPaint === 0) {
            console.log(`All walls are painted! Great job, Pesho!`);
            booFlag = false;
            break;
        } else if (areaLeftToPaint < 0) {
            console.log(`All walls are painted and you have ${Math.abs(areaLeftToPaint)} l paint left!`);
            booFlag = false;
            break;
        } else {
            command = input[index];
            index++;
        }
	}
	 if(booFlag) {
        console.log(`${areaLeftToPaint} quadratic m left.`)
    }
 
}