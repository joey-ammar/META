/**
 * Null
 * Intentional absence of any object value
 */
let abc = "abc";
let result = abc.match(/a/);
console.log("🚀 ~ file: undefinedNull.js:7 ~ result:", result); //return array

result = abc.match(/d/);
console.log("🚀 ~ file: undefinedNull.js:10 ~ result:", result); // null kinda work for objects values

/** Undefined
 * All functions return undefined unless its value specified
 */

let vl;
console.log("🚀 ~ file: undefinedNull.js:17 ~ vl:", vl);

function addTwoNums(a, b) {
  try {
    if (typeof a !== "number") {
      throw new ReferenceError("the first argument is not a number");
    } else if (typeof b !== "number") {
      throw new ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
}
addTwoNums(5, "5");

function letterFinder(word, match) {
  for (i = 0; i < word.length; i++) {
    if (word[i] == match) {
      //if the current character at position i in the word is equal to the match
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}
