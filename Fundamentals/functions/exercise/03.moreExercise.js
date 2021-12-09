function points(params) {

    let x1 = params[0];
    let y1 = params[1];
    let x2 = params[2];
    let y2 = params[3];
    let firstToZero = "invalid";
    let secondToZero = "invalid";
    let firstToSecond = "invalid";

    function firstToZeroPoint(p1, p2) {
        if (Math.sqrt(p1 * p1 + p2 * p2) % 1 === 0) {
            return firstToZero = "valid"
        }
    }

    function secondToZeroPoint(p1, p2) {
        if (Math.sqrt(p1 * p1 + p2 * p2) % 1 === 0) {
            return secondToZero = "valid";
        }
    }

    function firstToSecondPoint(p1, p2, p3, p4) {
        let xAbs = Math.abs(p1 - p3);
        let yAbs = Math.abs(p2 - p4);
        if (Math.sqrt(xAbs * xAbs + yAbs * yAbs) % 1 === 0) {
            return firstToSecond = "valid";
        }
    }
    firstToZeroPoint(x1, y1);
    secondToZeroPoint(x2, y2);
    firstToSecondPoint(x1, y1, x2, y2);
    console.log(`{${x1}, ${y1}} to {0, 0} is ${firstToZero}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondToZero}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${firstToSecond}`)
}

//--------------------------------

function pointsValidation(arr) {
    let rigth = [...arr];
    let half = Math.ceil(arr.length / 2);
    let left = rigth.splice(0, half);
    let cartesian = [0, 0];
    const calc = (x1, y1, x2, y2) => {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };
    const leftCalc = calc(left[0], left[1], cartesian[0], cartesian[1]);
    const rightCalc = calc(rigth[0], rigth[1], cartesian[0], cartesian[1]);
    const both = calc(left[0], left[1], rigth[0], rigth[1]);
    console.log(
      `{${left[0]}, ${left[1]}} to {${cartesian[0]}, ${cartesian[1]}} is ${
        Number.isInteger(leftCalc) ? "valid" : "invalid"
      }`
    );
    console.log(
      `{${rigth[0]}, ${rigth[1]}} to {${cartesian[0]}, ${cartesian[1]}} is ${
        Number.isInteger(rightCalc) ? "valid" : "invalid"
      }`
    );
    console.log(
      `{${left[0]}, ${left[1]}} to {${rigth[0]}, ${rigth[1]}} is ${
        Number.isInteger(both) ? "valid" : "invalid"
      }`
    );
  }