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
// sudo code
// print out letter 1 to 100
// if number % 3 && number % 5 = 0
// return Fizzbuzz
// ?else if number % 3 = 0
// return Fizz
// else if number % 5 = 0
// return Buzz
// else return number
// end
function fizzBuzz() {
  for (var number = 1; number <= 100; number++) {
    if ( number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz");
    } else if (number % 3 == 0) {
        console.log("Fizz");
    } else if (number % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
  }
}
fizzBuzz();
