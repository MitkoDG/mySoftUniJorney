function constructPyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let height = 0;

    let marbleArea = 0;
    let area = 0;

    let step = 0;
    let stepArea = 0;

    for (let i = base; i > 0; i -= 2) {
        height++;
        area = i * i;
        step = i - 2;
        if (step < 0) {
            step = 0;
        }

        stepArea = step * step;

        stone += stepArea * increment;

        if (i === 2 || i === 1) { // top step - gold
            gold = area * increment;
        } else if (height % 5 === 0) { // each 5th step - lapis lazuli
            lapis += (area - stepArea) * increment;
        } else {
            marble += (area - stepArea) * increment;
        }

    }

    let totalHeight = height * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);
}