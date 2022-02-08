class Circle {
    #pi = Math.PI;
    #perimeter = 0;
    
    constructor(radius) {
        this.radius = radius;
        this.#perimeter = 2 * Math.PI * radius;
    }

    get area() {
        return this.#pi * this.radius ** 2;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        if (value < 0) {
            throw new Error('Diameter cannot be less than 0')
        }

        this.radius = value / 2;
    }

    get perimeter() {
        return this.#perimeter;
    }

    set perimeter(value) {
        if (value < 0) {
            throw new Error('Perimeter cannot be less than 0');
        }

        this.#perimeter = value;
    }
}

let circle = new Circle(2);
console.log(circle.area);

circle.radius = 3;
console.log(circle.area);

circle.diameter = 10;
console.log(circle.radius);
console.log(circle.area);

// Using private property
console.log(circle.perimeter); 
circle.perimeter = 20;
console.log(circle.perimeter);