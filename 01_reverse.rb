# Reverse a string
#
# Write a method that will take a string
# as input, and return a new string with
# the same letters in reverse order.
#
# Difficulty:
# 1/10
#
# Example:
# reverse("hello") should return "olleh"
#
# Check your solution by running the tests:
# ruby tests/01_reverse_test.rb
#
puts "String: "
string = gets.chomp
def reverse (string)
  # Your code here
  return string.reverse
end
ans = reverse(string)
puts ans
