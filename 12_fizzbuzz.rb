# FizzBuzz
#
# Don't look this one up until you complete it yourself!
# It's a common interview question and there will be plenty
# of spoilers on the interwebs.
#
# This is a trivial question with many simple solutions.
# Try to write the least amount of code as possible.
# (AKA: Travisify™ your solution).
#
# Write a program that prints the numbers from 1 to 100.
# But for multiples of three print “Fizz” instead of the
# number and for the multiples of five print “Buzz”. For
# numbers which are multiples of both three and five
# print “FizzBuzz”.
#
# Difficulty:
# 4/10
#
# Example:
# 1
# 2
# Fizz
# 4
# Buzz
# ...etc
#

def fizzbuzz
  range = (1..100).to_a
  range.each do |x|
    if x % 3 == 0
      puts "fizz"
    elsif x % 5 == 0
      puts "buzz"
    else
      puts x
    end
  end
end

fizzbuzz
