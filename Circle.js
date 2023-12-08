// Constructor function amd Instance constructor

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle1 = new Circle(5);
const circle2 = new Circle(8);

console.log(circle1.area());
console.log(circle2.area());