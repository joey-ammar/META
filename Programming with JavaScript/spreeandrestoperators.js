let top3 = ["one", "two", "three"];
function showPLaces(place1, place2, place3) {
  console.log(place1);
  console.log(place2);
  console.log(place3);
}
showPLaces(...top3); // pass arrays like spread operator

//Using the spread operator, it's easy to concatenate arrays:
const fruits = ["apple", "pear", "plum"];
const berries = ["blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array

const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car };
console.log(flyingCar); // {wings: 2, wheels: 4}

let veggies = ["onion", "parsley"];
veggies = [...veggies, "carrot", "beetroot"];
console.log(veggies);
