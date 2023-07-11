class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}
//This code allows me to build new instances of the Train class.
//Each object instance of the Train class that I build will have its own custom properties of color and lightsOn.
let myFirstTrain = new Train("red", false);
let mySecondTrain = new Train("blue", false);
let myThirdTrain = new Train("blue", false);
console.log("🚀 ~ file: classAdvance.js:10 ~ myFirstTrain:", myFirstTrain);
//You can also add methods to classes, and these methods will then be shared by all future instance objects of my Train class.
myFirstTrain.toggleLights();
console.log(myFirstTrain); //this is changed to true
let train4 = new Train("red", false);
let result4 = train4.toggleLights();
console.log("🚀 ~ file: classAdvance.js:31 ~ result4:", result4); //undefined cause it do action not returning result
result4 = train4.lightsStatus(); // Lights on? true
result4 = train4.getSelf();
result4 = train4.getPrototype();

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed status:", this.highSpeedOn);
  }
  //Additionally, imagine you realized that you don't like how the toggleLights() method from the super-class works, and you want to implement it a bit differently in the sub-class. You can add it inside the HighSpeedTrain class.
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log("Lights are 100% operational.");
  }
}
//In JavaScript classes, super is used to specify what property gets inherited from the super-class in the sub-class.
let highSpeed1 = new HighSpeedTrain(200, false, "green", false);
highSpeed1.toggleLights();
console.log(highSpeed1);
