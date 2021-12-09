function pcStore(input) {
    let processor = Number(input[0]);
    let videoCard = Number(input[1]);
    let ram = Number(input[2]);
    let ramNum = Number(input[3]);
    let discount = Number(input[4]);

    let processorInBGN = processor * 1.57;
    let videoCardInBGN = videoCard * 1.57;
    let ramInBGNTotal = ram * 1.57 * ramNum;
    let afterDiscountProcessor = (processorInBGN * (100 - (discount * 100)) / 100);
    let afterDiscountVideo = (videoCardInBGN * (100 - (discount * 100)) / 100);

    let total = afterDiscountProcessor + afterDiscountVideo + ramInBGNTotal


    console.log(`Money needed - ${total.toFixed(2)} leva.`);

}
pcStore(["500",
"200",
"80",
"2",
"0.05"]);