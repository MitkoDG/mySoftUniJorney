function radiansToDegrees(input) {
    let radians= Number(input[0]);
    // градус = радиан * 180 / п
    let degrees = radians * 180 / Math.PI
    console.log(degrees.toFixed(0))

}

radiansToDegrees(["3.1416"])