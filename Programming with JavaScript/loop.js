/** For Loops */
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
for (let i = 10; i > 0; i--) {
  console.log(i);
}

/* while loop */

let counter = 3;
while (counter > 0) {
  console.log("While counter", counter);
  counter--;
}

/* Nested Loop */
/**2 week and days plan */
for (let i = 1; i <= 2; i++) {
  // the weeks will input 2 weeks

  for (let j = 1; j <= 5; j++) {
    // 5 days not weekend mentioned
    //if i input i here it will show 1 2 five times as the number looped in the second loop
    console.log("Week " + i + " Day " + j);
  }
}
