// Tests here!
let assert = require('assert');
let removeDupes = require('../33_remove_dupes')

describe("No Dupes", function() {
  it("Should return an array of no dupes", function() {
    assert.deepEqual(removeDupes([1,2,2,3]), [1,2,3]);
  });
});
