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

# Your code here

def fizzbuzz
  # 100.times do |num|
  #   num += 1
  #   if (num%3) == 0 && (num%5) == 0
  #     puts "FizzBuzz"
  #   elsif (num%3) == 0
  #     puts "Fizz"
  #   elsif (num%5) == 0
  #     puts "Buzz"
  #   else
  #     puts num
  #   end
  # end
  # puts (1..100).map {|i|
  # 	f = i % 3 == 0 ? 'Fizz' : nil
  # 	b = i % 5 == 0 ? 'Buzz' : nil
  # 	f || b ? "#{ f }#{ b }" : i
  #   }
  puts (1..100).map do |i|
    r = ["Fizz"][i % 3]
    r = "#{r}Buzz" if i % 5 == 0
    r || i
  end
end

fizzbuzz
