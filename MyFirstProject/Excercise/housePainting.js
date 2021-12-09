function housePainting(input) {
    let houseHight = Number(input[0]);
    let houseSideLenght = Number(input[1]);
    let houseHightTop = Number(input[2]);

    let sideSites = houseSideLenght * houseHight * 2 - (1.5 * 1.5 * 2);
    let frontAndBackSide = houseHight * houseHight * 2 - (1.2 * 2);
    let totalBotFlore = sideSites + frontAndBackSide
    let neededGreenPaint = totalBotFlore / 3.4;

    let topSides = houseSideLenght * houseHight * 2;
    let topFrontBackSides = 2 * (houseHight * houseHightTop / 2);
    let totalTop = topSides + topFrontBackSides;
    let neededRedPaint = totalTop / 4.3;

    console.log(neededGreenPaint.toFixed(2));
    console.log(neededRedPaint.toFixed(2));
}
housePainting(['6', '10', '5.2'])