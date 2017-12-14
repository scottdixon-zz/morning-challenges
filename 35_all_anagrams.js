/*
  An anagram is a word or a phrase made by rearranging the letters of
  another word or phrase; for example, “act” is an anagram of “cat”.

  allAnagrams takes a word (a) and an array of potential anagrams (b).

  Return an array of actual anagrams.

  For example:
  allAnagrams("cat", ["act","dog","god","tac"]) should return: ["act, tac"]

  Tests:
  mocha tests/35_anagram_test.js

*/

const allAnagrams = (a, b) => {
  // Your code here
  let letterArray = a.split('')
  let anagrams = []
  b.forEach(function(word) {
    if (a.length == word.length) {
      let testWord = word.split('')
      testWord.forEach(function(letter, i){
        letterArray.forEach(function(baseWord){
          
        })
      })
    }
  })
}

module.exports = allAnagrams;
