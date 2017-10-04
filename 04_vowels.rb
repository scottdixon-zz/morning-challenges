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
  # Your code here
  vowelArr = []
  letters = string.split(%r{\s*})
  letters.each do |letter|
    if letter.capitalize == "A" || letter.capitalize == "E" || letter.capitalize == "I" || letter.capitalize == "O" || letter.capitalize == "U"
      vowelArr.push(letter)
    end
  end
  return vowelArr
end
