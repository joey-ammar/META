let arr = ["one", "two", "three"];
arr.push("four");
arr.pop();
console.log("🚀 ~ file: arrays.js:2 ~ arr:", arr);
console.log(arr[0]);
console.log(arr[1]);

/* Array with function */

function arrayBuilder(one, two, three) {
  let arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  console.log(arr);
}
arrayBuilder("apple", "pear", "plum"); // ['apple', 'pear', 'plum']

/* Array with function return */

function arrayBuilder2(one, two, three) {
  let arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}
let returnedArr = arrayBuilder2("apple", "pear", "plum");
console.log("🚀 ~ file: arrays.js:29 ~ returnedArr:", returnedArr);
