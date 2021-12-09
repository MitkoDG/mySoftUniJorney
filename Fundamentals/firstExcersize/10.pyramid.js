function solve(w, h) {


    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let totalst = 0;
    let totalmarb = 0;
    let totalLapis = 0;
    let mar = 0

    let count = 0;

    for (let index = w; index > 0; index -= 2) {
        count++;
        if (index === 1 || index === 2) {
            gold = index * index;
            break
        }

        marble = index * 4 - 4;
        stone = (index * index) - marble;
        totalst += stone;

        if (count % 5 === 0) {
            totalLapis += marble

        } else {
            totalmarb += marble
        }
        mar = index
    }



    totalst = Math.ceil(totalst * h);
    totalmarb = Math.ceil(totalmarb * h);
    totalLapis = Math.ceil(totalLapis * h);
    gold = Math.ceil(gold*h);
    let final = Math.floor(count * h)

    console.log(`Stone required: ${totalst}`);
    console.log(`Marble required: ${totalmarb}`);
    console.log(`Lapis Lazuli required: ${totalLapis}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${final}`);
}