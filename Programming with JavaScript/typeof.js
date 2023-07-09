let test = typeof "Hi Iam a string";
test = typeof 2;
test = typeof 3.14;
test = typeof true;
test = typeof false;
test = typeof 1 < 2;
test = typeof [1, 2, 3];
test = typeof { first: 2 };
test = typeof function () {
  console.log("Hi");
};
console.log(test);
