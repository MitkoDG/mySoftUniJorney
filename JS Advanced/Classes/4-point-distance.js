class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(firstPoint, secondPoint) {
        if (firstPoint instanceof Point == false || secondPoint instanceof Point == false){
            throw new TypeError('Parameter must be of type Point')
        }
        let a = firstPoint.x - secondPoint.x;
        let b = firstPoint.y - secondPoint.y;

        let distance = Math.sqrt(a ** 2 + b ** 2);

        return distance;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);

let distance = Point.distance(p1, p2);
console.log(distance);