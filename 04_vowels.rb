# Vowels
#
# Write a method that will take a string and
# return an array of vowels used in that string.
#
# Difficulty:
# 4/10
#
# Example:
# vowels("The quick brown fox") should return ["e","u","i","o","o"]
# vowels("Hello World") should return ["e","o","o"]
#
# Check your solution by running the tests:
# ruby tests/04_vowels_test.rb
#

def vowels (string)
  result = []
  string.split('').each do |c|
    if "aeiouAEIOU".include? c
      result.push(c)
    end
  end
  return result
end
