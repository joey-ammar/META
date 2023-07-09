try {
  //throw error force the try to have an error and catch in the catch block
  console.log(a + b);
} catch (error) {
  console.log(error);
  console.log("We have an error");
}
console.log("The program runs normally");

//
try {
  throw new ReferenceError();
} catch (error) {
  console.log(error);
  console.log("We have reference error");
}
console.log("the program doesnt stop");
