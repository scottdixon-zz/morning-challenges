var assert = require('assert');
var largestNumber = require('../17_largest_number');

describe('largestNumber', function() {
  it('should return the largest number', function() {
    assert.equal(10, largestNumber(1,10));
    assert.equal(10, largestNumber(10,2));
    assert.equal(3, largestNumber(3,2));
  });
});
