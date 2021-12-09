function oscarsCeremony(input) {
    let rentCost = Number(input[0]);

    let statue = rentCost * 0.70;
    let food = statue * 0.85;
    let sound = food / 2;

    console.log((rentCost+statue+food+sound).toFixed(2));

}
oscarsCeremony(['3500'])