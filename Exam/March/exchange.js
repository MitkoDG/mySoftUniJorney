function exchange(input){
    let bitcoin = Number(input[0]);
    let china = Number(input[1]);
    let commision = Number(input[2]);

    let BGNbitcoin = bitcoin * 1168;
    
    let BGNchina = (china * 0.15) * 1.76;
    let EURTotal = (BGNbitcoin + BGNchina) / 1.95;
    let afterCommision = EURTotal - (EURTotal * commision / 100);

    console.log(afterCommision.toFixed(2));
}
exchange(['1',
    '5',
    '5']);