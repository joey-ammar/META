const { default: TestRunner } = require("jest-runner");
const testing = require("./Testing");
test("returns the number plus 5", () => {
  expect(testing(1)).toBe(6);
});
