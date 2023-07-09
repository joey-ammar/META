let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate = 1.2;

let convertCurrency = (amount, rate) => {
  return amount * rate;
};
currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);

function recursion() {
  console.log("one");
  console.log("two");
  console.log("three");
  // endless loop recursion();
}
