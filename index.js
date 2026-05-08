function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function getNodeVersionMessage() {
  return `Running tests using Node.js version: ${process.version}`;
}

module.exports = {
  add,
  multiply,
  getNodeVersionMessage
};

if (require.main === module) {
  console.log("Node Matrix Demo Application");
  console.log(getNodeVersionMessage());
  console.log("2 + 3 =", add(2, 3));
  console.log("4 * 5 =", multiply(4, 5));
}