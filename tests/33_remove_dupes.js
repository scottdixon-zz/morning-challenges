// Tests here!

let assert = require('assert');
let removeDupes = require('../33_remove_dupes.js')

describe("Regular Tests:", function() {
  it("Should return no duplicate numbers:", function() {
    assert.deepEqual(removeDupes([1, 1, 2, 3]), [1,2,3]);
    assert.deepEqual(removeDupes([21,22, 22, 23]), [21, 22, 23]);
  });

  it("Should return no duplicate strings:", function() {
    assert.deepEqual(removeDupes(["a", "b", "c", "c"]), ["a","b","c"]);
    assert.deepEqual(removeDupes(["x","y", "z", "z"]), ["x", "y", "z"]);
  });
});
