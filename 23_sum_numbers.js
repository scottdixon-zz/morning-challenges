/*
  Sum Numbers

  Write a method that will take an array of numbers,
  and return their sum.

  JS syntax will be the hardest part. Goodluck!

  Example:
  sumNumbers([1,1,1]) should return 3
  sumNumbers([5,2,100,0,10]) should return 117
  sumNumbers([1]) should return 1

  Check your solution by running the tests:
  mocha tests/23_sum_numbers_test.js
*/

sumNumbers = (numbers) => {
  var sum = numbers.reduce(function (a, b) {return a + b;}, 0);
  return sum
}
// Don't remove this line, the tests need it
module.exports = sumNumbers
//  for {
//     length = number.length;
//     sum = 0;
//     index < length
//     index += numbers[index++]
//  );
//  return sum
// }
