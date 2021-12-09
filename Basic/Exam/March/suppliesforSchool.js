function suppliesforSchool(input) {
    let penPcs = Number(input[0]);
    let markerPcs = Number(input[1]);
    let chemicalL = Number(input[2]);
    let discount = Number(input[3]);

    let penTotal = penPcs * 5.80;
    let markerTotal = markerPcs * 7.20;
    let chemicalTotal = chemicalL * 1.20;

    let totalForOrder = penTotal + markerTotal + chemicalTotal;
    let afterDicount = totalForOrder - ((totalForOrder * discount)/100);

    console.log(afterDicount.toFixed(3));

}
suppliesforSchool(['2',
    '3',
    '2.5',
    '25'
    ]);