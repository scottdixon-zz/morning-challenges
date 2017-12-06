let assert = require('assert');
let validEmail = require('../38_valid_email');

describe("Valid Email", function() {
  it("Should identify emails without an @ symbol as invalid", function() {
    assert.equal(validEmail('gmail'), false);
  });
  it("Should identify emails without a user as invalid", function() {
    assert.equal(validEmail('@gmail.com'), false);
  });
  it("Should identify emails without a .tld as invalid", function() {
    assert.equal(validEmail('hello@gmail'), false);
  });
  it("Should identify emails with a . but without a .tld as invalid", function() {
    assert.equal(validEmail('hello.gmail@com'), false);
  });
  it("Should identify blank emails as invalid", function() {
    assert.equal(validEmail(''), false);
  });
  it("Should identify valid emails", function() {
    assert.equal(validEmail('hello@edabit.com'), true);
  });
});
