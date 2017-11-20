// *Logging*
// 1. console log 'hello world' to the screen



// *Returning*
// 1. Line 12 logs whatever greet() returns.
// Right now it's logging undefined. Fix me!
function greet () {
  'hello!';
}
console.log(greet());



// *Functions & Arrow Functions*
// Here's a function that takes a first and last name and logs a full name.
function fullName (first, last) {
  console.log(first + ' ' + last);
}
// 1. Call the function so it puts your full name onto the screen.

// 2. Use modern syntax, turn fullName into an es6 arrow function.

// 3. Add a middle name. Update #1 to work.

// 4. Use interpolation instead of concatination.



// *Math*
// 1. Find the largest number, fix line 36.
let number_1 = 10;
let number_2 = 20;
let number_3 = 30;
let largestNumber = 0; //Use Math.max here. Keep it simple. Don't use an array.
console.log('Largest number is: ' + largestNumber);



// *Scope*
let today = 'Tuesday';
if (today === 'Tuesday') {
  let tomorrow = 'Wednesday';
}
// Tomorrow is undefined on the line below. Uncomment & fix me! (Hint: let is block scoped)
// console.log('Tomorrow is ' + tomorrow);
