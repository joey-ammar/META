function noDefaultParams(number) {
  console.log("Result:", number * number);
}
noDefaultParams(); //NaN

function DefaultParams(number = 10) {
  console.log("Result:", number * number);
}
DefaultParams();
