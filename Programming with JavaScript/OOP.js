/**Objects */

let purchase = {
  shoes: 800,
  stateTax: 1.2,
  totalPrice: () => {
    let calculate = purchase.shoes * purchase.stateTax;
    console.log(calculate);
  },
};

let purchase2 = {
  shoes: 800,
  stateTax: 1.2,
  totalPrice: () => {
    let calculate = this.shoes * this.stateTax;
    console.log(calculate);
  },
};
purchase.totalPrice(); //call a method

/**Classes are so important */

class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }
  turboOn() {
    console.log("Turbo On!");
  }
}

const car1 = new Car("red", 124);
car1.turboOn(); //call method

/**Inheritance and prototype */

let bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};
let eagle1 = Object.create(bird);
console.log("🚀 ~ file: OOP.js:45 ~ eagle1:", eagle1);

console.log(eagle1.hasFeathers);
console.log(eagle1.canFly);
console.log(eagle1.hasWings);

let eagle2 = Object.create(bird);
let pinguin1 = Object.create(bird);
pinguin1.canFly = false;
console.log(pinguin1);
console.log(eagle1.canFly);
