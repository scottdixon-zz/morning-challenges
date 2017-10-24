# Count Letters
#
# Write a method that will take a string, keep count
# of each letter and return the totals as a hash.
#
# Difficulty:
# 5/10
#
# Example:
# count_letters("hello") should return {"h"=>1, "e"=>1, "l"=>2, o=>1}
# count_letters("abcba") should return {"a"=>2, "b"=>2, "c"=>1}
#
# Check your solution by running the tests:
# ruby tests/05_count_letters_test.rb
#

def count_letters (string)
  #result = {} # You'll need an empty hash to get started!

    string.scan(/[A-z]/).inject(Hash.new(0)){|letter, count| letter[count] += 1; letter}
    #what i was trying to do and it would split the string but complain about converting to integer..
   #string.scan(/[A-z]/).to_i.count(/[A-z]/)

  end
  # s.each do  |l|
  #   l += 1
  #   result.push(l)
  # end


#  return result
