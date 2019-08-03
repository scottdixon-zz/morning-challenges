/*

Open Door

Return true if name is Simon and hasCoffee is true.
Otherwise return false.

Test your solution:
mocha tests/18_open_door_test.js

*/

function openDoor (name, hasCoffee) {
  if (name === 'Simon' && hasCoffee == true) {
    return true;
  } else {
    return false;
  }
}

// Don't remove this line, the tests need it
module.exports = openDoor
