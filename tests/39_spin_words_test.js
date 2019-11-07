let assert = require('assert');
let spinWords = require('../39_spin_words');

describe("Spin Words", function() {
  it("Should return spun words if letter count is greater than 5", function() {
    assert.equal(spinWords('hello'), 'olleh');
  });

  it("Should return original word if less than 5", function() {
    assert.equal(spinWords('this'), 'this');
  });

  it("Should return spun words with a space if more than one word in a string", function() {
    assert.equal(spinWords('hello world'), 'olleh dlrow');
  });

})
