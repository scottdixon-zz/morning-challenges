var assert = require('assert');
var rentalCarCost = require('../25_car_hire');

describe("Regular Tests:", function() {
  it("Should work for under 3 days:", function() {
    assert.equal(rentalCarCost(1), 40);
    assert.equal(rentalCarCost(2), 80);
  });
  it("Should work for under 7 days:", function() {
    assert.equal(rentalCarCost(3), 100);
    assert.equal(rentalCarCost(4), 140);
    assert.equal(rentalCarCost(5), 180);
    assert.equal(rentalCarCost(6), 220);
  });
  it("Should work for 7 or more days:", function() {
    assert.equal(rentalCarCost(7), 230);
    assert.equal(rentalCarCost(8), 270);
    assert.equal(rentalCarCost(9), 310);
    assert.equal(rentalCarCost(10), 350);    
  });
});
