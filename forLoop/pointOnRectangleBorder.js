function pointOnRectangleBorder(input) {
    let index = 0;
    let x1 = Number(input[index]);
    index++;
    let y1 = Number(input[index]);
    index++;
    let x2 = Number(input[index]);
    index++;
    let y2 = Number(input[index]);
    index++;
    let x = Number(input[index]);
    index++;
    let y = Number(input[index]);
    index++;

    let firstCondition = false;
    let secondCondition = false;

    if ((x == x1 || x == x2) && (y >= y1 && y <= y2)) {
        firstCondition = true;

    }
    if ((y == y1 || y == y2) && (x >= x1 && x <= x2)) {
        secondCondition = true;
    }

    if (firstCondition || secondCondition) {
        console.log('Border');
    }
    // if (secondCondition == 'false') {
    else {
        console.log('Inside / Outside')
    }
}
pointOnRectangleBorder(['2',
    '-3',
    '12',
    '3',
    '8',
    '-1'
]);