//Working with arrays in javascript

/**
 * 1 - foreach
 */
let fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

/**
 * 2 - Filter
 */
const nums = [0, 10, 20, 30, 40, 50];
let result = nums.filter((num) => {
  return num < 30;
});

console.log(result);

/**
 * Map -> return a new array
 */

let anotherNums = [0, 10, 20, 30, 40, 50];
let finalResult = anotherNums.map((anotherNums) => {
  return anotherNums * 10;
});
console.log(finalResult);

const resultss = [];
const drone = {
  speed: 100,
  color: "yellow",
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});
console.log(resultss);

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
bestBoxers.get(1); // 'The Champion'
console.log(bestBoxers);

const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
