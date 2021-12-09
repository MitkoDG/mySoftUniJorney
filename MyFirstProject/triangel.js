function areaT(input) {
    let sideA = Number(input[0]);
    let hight = Number(input[1]);

    let area = (sideA * hight) / 2;

    console.log(area.toFixed(2));
}

areaT(['20', '30']);