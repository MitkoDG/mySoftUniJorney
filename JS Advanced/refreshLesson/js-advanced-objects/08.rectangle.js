function rectangle(width, height, color) {
    color = color[0].toUpperCase() + color.slice(1);
    return {
        width,
        height,
        color,
        calcArea() {
            return this.width * this.height;
        }
    }
}