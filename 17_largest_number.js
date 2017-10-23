/*

Largest Number

Write a method that will take two numbers,
and return whichever is the largest.

We've done this challenge previously.
This time, use JavaScript!

Test your solution:
mocha tests/17_largest_number_test.js
(You'll need mocha installed first: `npm install mocha -g`)

*/

function largestNumber (a, b) {
    if (a > b) {
      return a;
  } else {
      return b;
  }
}


// Don't remove this line, the tests need it
module.exports = largestNumber
