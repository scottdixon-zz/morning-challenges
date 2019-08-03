// FizzBuzz - JS Edition
//
// Practice writing the JS by hand. Avoid copy/paste soluitons.
// Reference your previous Ruby solution if you get stuck.
//
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the
// number and for the multiples of five print “Buzz”. For
// numbers which are multiples of both three and five
// print “FizzBuzz”.
//
// Test your solution:
// $ node 24_fizzbuzz.js
//
// Example:
// 1
// 2
// Fizz
// 4
// Buzz
// ...etc

// Your code here!

let i = 0;
do {
  i += 1;
  if (i % 15 === 0) {
    console.log('fizzbuzz')
  } else if (i % 3 === 0) {
    console.log('fizz')
  } else if (i % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(i)
  }
} while (i < 100);
