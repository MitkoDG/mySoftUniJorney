function cookingByNumbers(num, ...operations) {
    let number = Number(num);

    let obj = {
        fillet(number) {
            number *= 0.8;
            console.log(number.toFixed(1));
            return number;
        },
        chop(number) {
            number /= 2;
            console.log(number);
            return number;
        },
        dice(number) {
            number = Math.sqrt(number);
            console.log(number);
            return number;
        },
        spice(number) {
            number += 1;
            console.log(number);
            return number;
        },
        bake(number) {
            number *= 3;
            console.log(number);
            return number;
        }
    };

    operations.forEach(x => number = obj[x](number));
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')