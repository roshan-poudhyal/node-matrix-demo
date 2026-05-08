const assert = require("assert");
const { add, multiply, getNodeVersionMessage } = require("./index");

console.log("Starting test execution...");
console.log(getNodeVersionMessage());

assert.strictEqual(add(2, 3), 5, "2 + 3 should be 5");
assert.strictEqual(add(-1, 1), 0, "-1 + 1 should be 0");

assert.strictEqual(multiply(4, 5), 20, "4 * 5 should be 20");
assert.strictEqual(multiply(0, 9), 0, "0 * 9 should be 0");

console.log("All tests passed successfully.");