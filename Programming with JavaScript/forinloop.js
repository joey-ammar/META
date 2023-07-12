let car = {
  speed: 200,
  color: "red",
};

//console.log(Object.keys(car)); //change it to array
let newCar = Object.keys(car);
//console.log("🚀 ~ file: forinloop.js:8 ~ newCar:", newCar);
//return array of stings

let car2 = {
  speed: 200,
  color: "red",
};
//console.log(Object.values(car2)); // [300, 'yellow']

let car3 = {
  speed: 200,
  color: "red",
};
//console.log(Object.entries(car3)); // [ ['speed', 400], ['color', 'magenta'] ]

let clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (key of Object.keys(clothingItem)) {
  //console.log(key, ":", clothingItem[key]);
}

/***************** */

let train = {
  engine: true,
  steering: true,
  speed: "slow",
};
let sportTrain = Object.create(train);

sportTrain.speed = "fast";
console.log("🚀 ~ file: forinloop.js:42 ~ sportTrain:", sportTrain);

/**for in is unreliable */
for (prop in sportTrain) {
  console.log(prop); // iterate over object and its prototype!
}
for (prop of Object.keys(sportTrain)) {
  console.log(prop + `: ` + sportTrain[prop]); // iterate over object own properties only!!!
}
