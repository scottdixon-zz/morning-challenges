let assert = require('assert');
let sumFinder = require('../37_sum_finder');

describe("Sum Finder", function() {
  it("Should return true when two items add up to sum", function() {
    assert.equal(sumFinder([1,1], 2), true);
    assert.equal(sumFinder([1,8,9,5], 6), true);
  });
  it("Should return false if no two numbers add up to sum", function() {
    assert.equal(sumFinder([1,3], 2), false);
  });
});
