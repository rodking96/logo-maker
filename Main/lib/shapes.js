class Shape{
        constructor() {
            this.color="";
        }
        setColor(color) {
            this.color= color;
        }
    }
    // Defines a Circle class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
    class Circle extends Shape{
        render() {
            return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
        }
    }
    // Defines a Square class that extends Shape and renders an SVG Square with position, size, and fill color based on the current instance's properties.
    class Square extends Shape{
        render() {
            return `<rect x="90" y="40" height="120" width="120" fill="${this.color}" />`;
        }
    }
    // Defines a Triangle(Polygon) class that extends Shape and renders an SVG Triangle(Polygon) with position, size, and fill color based on the current instance's properties.
    class Triangle extends Shape{
        render() {
            return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
        }
    };
    
    module.exports = {Circle, Square, Triangle};