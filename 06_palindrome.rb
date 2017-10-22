# Palindrome
#
# Write a method that will take a word as a string and
# return a boolean indicating whether or not the word
# is a palindrome.
#
# Difficulty:
# 3/10
#
# Example:
# palindrome("hello") should return false
# palindrome("racecar") should return true
#
# Check your solution by running the tests:
# ruby tests/06_palindrome_test.rb
#

def palindrome (string)
  # Your code here
  letters = string.split(%r{\s*})
  half = (letters.length / 2).floor
  i = 0
  loop do
    if letters[i] == letters[-i]
      i += 1
      half = 4
      break
    end
  end
  return half
end
