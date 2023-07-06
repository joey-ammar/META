/** Assign Operator = */
let person = "Jim";
/**Arithmetic Operator */
/**
 *  + Addition
 *  - Subtraction
 *  / Division
 *  * Multiplication
 */
console.log(2 + 25 + 2);
console.log(18 - 23);
console.log(4 / 2);
console.log(2 * 2);
/**
 * Comparison Operator
 * > Greater than 3 > 2
 * < Less than 2 < 3
 * == equal to
 * != Not equal to
 */

console.log(3 > 2);
console.log(3 < 2);
console.log(3 == 2);
console.log(3 != 3);

/** Logical Operator */
/**
 *  && checks for both conditions to be true
 *  || checks for at least one condition is true ( returns the first true)
 *  ! returns false of the condition is true
 */
console.log(3 && 3);
console.log(12 || 13);

/**
 * In depth
 */
let currentTime = 9;
let inside = 110;
console.log(currentTime && inside); // return the last one
console.log(currentTime || inside); // return the first one
console.log(!currentTime); // return false cause original value is true
