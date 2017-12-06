/*
  Valid email

  Don't use any solutions you find on the web, try building
  this from scrath by yourself!

  validEmail takes one argument 'email'. Return true if
  the email is a valid email. Otherwise, return false.

  Email validation can gety really complicated,
  this challenge will satisfy 95% of use cases.

  Rules:
  - The string must contain an "@" character.
  - The string must contain a "." character.
  - The "@" character must have a minimum of one character in front of it.
  - The " . " and the "@" must be in the appropriate places.
  (john.doe@com is invalid, john@doe.com is valid.)

  Examples:
  validEmail('@gmail.com') ➞ false
  validEmail('hello.gmail@com') ➞ false
  validEmail('gmail') ➞ false
  validEmail('hello@gmail') ➞ false
  validEmail('hello@edabit.com') ➞ true
  validEmail('') ➞ false

  Use the tests to guide you toward a solution:
  mocha tests/38_valid_email_test.js

*/

const validEmail = (email) => {
  
}

module.exports = validEmail
