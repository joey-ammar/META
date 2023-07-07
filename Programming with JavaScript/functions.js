function addNumber() {
  let a = 10;
  let b = 10;
  let c = a + b;
  console.log(c);
}
addNumber();

function addXY(x, y) {
  console.log(x + y);
}
addXY(10, 10);

/* Function with arrays and loops */

function listArrayItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "red") {
      console.log("Its red");
      break; // stops the function and quit
      // continue skip and continues
    } else {
      console.log(i + 1 + " " + arr[i]);
    }
  }
}
let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);
/** Adding conditional to arrays */

const letterFinder = (word, match) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
};
letterFinder("test", "t"); // we can loop strings
