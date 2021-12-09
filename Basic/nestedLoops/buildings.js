function building(input){
    let totalFloors = Number(input[0]);
    let roomsOnFloor = Number(input[1]);

    for (let i = totalFloors; i > 0; i--) {
        let buffer = "";
        for (let r = 0; r < roomsOnFloor; r++) {
            if (i === totalFloors) {
                buffer += `L${i}${r} `;
            } else if (i % 2 === 0) {
                buffer += `O${i}${r} `;
            } else {
                buffer += `A${i}${r} `;
            } 
        }
        console.log(buffer);  
    }
}
building(["6", "4"]);