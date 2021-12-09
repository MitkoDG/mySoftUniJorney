function areaT(input) {
    let temprature = Number(input[0]);

    let faren = (temprature * 1.8) +32;

    console.log(faren.toFixed(2));
}

areaT(['25']);