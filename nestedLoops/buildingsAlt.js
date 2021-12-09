function solve(input) {
    let floorCount = Number(input[0]);
    let apartmentCount = Number(input[1]);

    for (let floor = floorCount; floor > 0; floor--) {
        let result = "";
        for (let a = 0; a < apartmentCount; a++) {

            if (floor === floorCount) {
                result += "L" + floor + a + " ";
            } else if (floor % 2 === 0) {
                result += "O" + floor + a + " ";
            } else {
                result += "A" + floor + a + " ";
            }
        }
        console.log(result)
    }
}


function building(input) {
 
    let flors = Number(input[0]);
    let rooms = Number(input[1]);
    let currentRoom = "";
    let typeOfFlor = "";
    let currentFlor = "";
 
    for (let i = flors; i >= 1; i--) {
        if (i === flors) {
            typeOfFlor = "L"
        } else if (i % 2 === 0) {
            typeOfFlor = "O"
        } else {
            typeOfFlor = "A"
        }
        currentFlor = "";
        for (let j = 0; j < rooms; j++) {
            currentRoom = typeOfFlor + i + j;
            if (j === 0 || j === rooms) {
         currentFlor += currentRoom;
            } else {
                currentFlor += " ";
                currentFlor += currentRoom;
            }
        }
   console.log(currentFlor);
    }
 
}