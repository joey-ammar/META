/**
 * If else statement
 */

let name = "joey";
if (name) {
  console.log("Hi Joey");
} else {
  console.log("Not TRUE");
}

let result = 50;
if (result > 40) {
  console.log("You passed");
} else {
  console.log("you didnt pass");
}

/**
 * Switch statement
 */

let place = "first";
switch (place) {
  case "first":
    console.log("Gold");
    break;
  case "second":
    console.log("Silver");
    break;
  default:
    console.log("last");
}

let day = `Sunday`;
switch (day) {
  case "Monday":
    console.log("Read a book");
    break;
  case "Tuesday":
    console.log("Watch a movie");
    break;
  case "Wednesday":
    console.log("Read a book");
    break;
  case "Thursday":
    console.log("Play basketball");
    break;
  case "Friday":
    console.log("Socialize");
    break;
  case "Saturday":
    console.log("Chill");
    break;
  case "Sunday":
    console.log("Have barbecue");
    break;
  default:
    //this block will run if no condition matches
    console.log("There is no such day");
}
