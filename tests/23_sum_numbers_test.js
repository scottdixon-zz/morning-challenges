var assert = require('assert');
var sumNumbers = require('../23_sum_numbers');

describe('Sum Numbers', function() {
  it('should total the numbers', function() {
    assert.equal(3, sumNumbers([1,1,1]));
  });
  it('should work with zero', function() {
    assert.equal(117, sumNumbers([5,2,100,0,10]));
  });
  it('should work with one number', function() {
    assert.equal(1, sumNumbers([1]));
  });
});
