function solve(arr) {

    let leftoverObj = {};
    let bottleObj = {};

    for (let entry of arr) {
        let [fruit, qty] = entry.split(' => ');
        qty = Number(qty);
        if (qty < 1000) {
            let leftover = qty;
            if (!leftoverObj.hasOwnProperty(fruit)) {
                leftoverObj[fruit] = leftover;
            } else {
                leftoverObj[fruit] += leftover;
                if (leftoverObj[fruit] >= 1000) {
                    if (!bottleObj.hasOwnProperty(fruit)) {
                        bottleObj[fruit] = 1;
                        leftoverObj[fruit] -= 1000;
                    } else {
                        bottleObj[fruit] += 1;
                        leftoverObj[fruit] -= 1000;
                    }
                }

            }

        } else {
            let bottleNum = Math.floor(qty / 1000);
            let remaining = qty % (bottleNum * 1000);
            if (!bottleObj.hasOwnProperty(fruit)) {
                bottleObj[fruit] = bottleNum;
            } else {
                bottleObj[fruit] += bottleNum;
            }

            if (!leftoverObj.hasOwnProperty(fruit)) {
                leftoverObj[fruit] = remaining;
            } else {
                leftoverObj[fruit] += remaining;
                if (leftoverObj[fruit] >= 1000) {
                    if (!bottleObj.hasOwnProperty(fruit)) {
                        bottleObj[fruit] = 1;
                        leftoverObj[fruit] -= 1000;
                    } else {
                        bottleObj[fruit] += 1;
                        leftoverObj[fruit] -= 1000;
                    }
                }
            }

        }
    }

    for (let fruit in bottleObj) {
        console.log(`${fruit} => ${bottleObj[fruit]}`);
    }
}