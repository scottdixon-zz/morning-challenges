# Vowels
#
# Write a method that will take a string and
# return an array of vowels used in that string.
#
# Difficulty:
# 4/10
#
# Example:
# count_vowels("The quick brown fox") should return ["e","u","i","o","o"]
# count_vowels("Hello World") should return ["e","o","o"]
#
# Check your solution by running the tests:
# ruby tests/04_vowels_test.rb
#

def vowels (string)
  results = []
      vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"] #the same as %w[ a e i o u ]
      string.split("").each do |char|
        vowels.each do |vowel|
          if char == vowel
            results.push(vowel)

          end
        end
      end
      return results
end
