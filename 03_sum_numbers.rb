# Sum Numbers
#
# Write a method that will take an array of numbers,
# and return their sum.
#
# Difficulty:
# 3/10
#
# Example:
# sum_numbers([1,1,1]) should return 3
# sum_numbers([5,2,100,0,10]) should return 117
#
# Check your solution by running the tests:
# ruby tests/03_sum_numbers_test.rb
#

def sum_numbers (numbers)
  # Your code here
  numArray = numbers
  total = 0
  numArray.each do |num|
    if num > 0
      total += num
    end
  end
  return total
end
