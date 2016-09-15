// Convert the following code from a for-loop to Array#map:
// * Your solution should use Array.prototype.map()
// * Do not use any for/while loops or Array.prototype.forEach.
// * Do not create any unnecessary functions e.g. helpers.

function doubleAll(numbers) {
  return (numbers || []).map(n => n * 2);
}

console.log(doubleAll([1,2,3,4])); //[ 2, 4, 6, 8 ]