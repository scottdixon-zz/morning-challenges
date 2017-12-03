let assert = require('assert');
let allAnagrams = require('../35_all_anagrams');

describe("All Anagrams", function() {
  it("Should return an array of annagrams", function() {
    assert.deepEqual(allAnagrams("cat", ["act","dog","god","tac"]), ["act", "tac"]);
    assert.deepEqual(allAnagrams("dog", ["act","dog","god","tac"]), ["god", "god"]);
  });
});
