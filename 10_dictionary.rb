# Dictionary
#
# Extend the Dictionary class.
#
# It should have three methods:
# .add_word(word, definition) -> Should store a word and definition
# .lookup(word) -> Should return a definition
# .total_words -> Should return the number of words stored
#
# Difficulty:
# 4/10
#
# Example:
# dictionary = Dictionary.new
# dictionary.add_word('ruby', 'A precious stone')
# dictionary.total_words -> should return 1
# dictionary.lookup('ruby') -> should return 'A previous stone'
#
# Check your solution by running the tests:
# ruby tests/10_dictionary_test.rb
#

 class Dictionary #attr_accessor :word, :defintion
   def initialize
     @words = {}
   end

   def add_word(word, definition)
    @words[word] = definition
   end

   def lookup (word)
     @words[word]
   end

   def total_words
     @words.length
   end
 end
