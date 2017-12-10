let assert = require('assert');
let checkCoupon = require('../40_check_coupon');

describe("Check Coupon", function() {
  it("Should detect correct, unexpired coupon codes", function() {
    assert.equal(checkCoupon('123','123','September 5, 2018','October 1, 2018'), true);
  });
  it("Should detect incorrect, unexpired coupon codes", function() {
    assert.equal(checkCoupon('123','124','September 5, 2018','October 1, 2018'), false);
  });
  it("Should detect correct, expired coupon codes", function() {
    assert.equal(checkCoupon('123','123','October 1 5, 2018','September 1, 2018'), true);
  });
  it("Should detect incorrect, expired coupon codes", function() {
    assert.equal(checkCoupon('123','124','October 1 5, 2018','September 1, 2018'), false);
  });
});
