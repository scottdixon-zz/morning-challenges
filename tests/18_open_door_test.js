var assert = require('assert');
var openDoor = require('../18_open_door');

describe('openDoor', function() {
  it('should return true if "Simon" and hasCoffee', function() {
    assert.equal(true, openDoor("Simon",true));
  });
  it('should return false if !"Simon" and hasCoffee', function() {
    assert.equal(false, openDoor("Scott",true));
  });
  it('should return false if "Simon" and !hasCoffee', function() {
    assert.equal(false, openDoor("Simon",false));
  });
});
