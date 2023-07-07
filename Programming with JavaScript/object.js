let obj1 = {
  name: "joey",
  age: 30,
  job: "software engineer",
};
console.log("🚀 ~ file: object.js:6 ~ obj1:", obj1);

let obj2 = {};
console.log("🚀 ~ file: object.js:9 ~ obj2:", obj2);
obj2.name = "Mark";
obj2.age = 30;
console.log("🚀 ~ file: object.js:9 ~ obj2:", obj2);

//creating an object with properties and their values
let assistantManager = {
  rangeTilesPerTurn: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
  specialAbility: "young and ambitious",
  greeting: "Let's make some money",
};

let house2 = {};
house2["rooms"] = 4;
house2["color"] = "pink";
house2["priceUSD"] = 12345;
house2[" number of doors"] = 2;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

/* mixing arrays and objects */
let arrOfKeys = ["speed", "altitude", "color"];
let drone = {
  speed: 100,
  altitude: 200,
  color: "red",
};
for (let i = 0; i < arrOfKeys.length; i++) {
  console.log(drone[arrOfKeys[i]]);
}
