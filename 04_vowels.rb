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
  splitstring = string.split(//)
  vowellist = []
  splitstring.each do |x|
    if x == "a" or x == "A"
      vowellist.push(x)
    elsif x == "e" or x == "E"
      vowellist.push(x)
    elsif x == "i" or x == "I"
      vowellist.push(x)
    elsif x == "o" or x == "O"
      vowellist.push(x)
    elsif x == "u" or x == "U"
      vowellist.push(x)
    end
  end
  vowellist
end
