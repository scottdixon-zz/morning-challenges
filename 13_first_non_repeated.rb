# First Non-repeated
#
# Write a method that will find the first non-repeated
# character in a String. Return false if only repeats
# are found.
#
# *** Whiteboard this first! ***
#
# Pro tip: code quality is a a big deal to potential
# employers. Use smart variable names, keep an eye on
# indentation and be consistent in your decisions
# (e.g. stick to single or double quotes)
#
# Difficulty: ~6/10 (Varies depending on solution.
# The more optimised the solution, the more difficult
# the algorithm.)
#
# Beast mode: can you return on the first non-repeat,
# without checking every other letter?
#
# Beat mode++: can you maintain linear time?
#
# Example:
# firstNonRepeat('aaaabbbcccdeeefgh') -> 'd'
# firstNonRepeat('wwwhhhggge') -> 'e'
# firstNonRepeat('awwwhhhggge') -> 'a'
# firstNonRepeat('wwwhhhggg') -> false
#
# Check your solution by running the tests:
# ruby tests/13_first_non_repeated_test.rb
#

def firstNonRepeat (string)
  # Your code here
  # Whiteboard first!
  letters = string.split(%r{\s*})
  flip = false
  nonRepeat = []
  letters.each_with_index do |letter,index|
      if index+1 < letters.size && flip
        if letter != letters[index-1] && letter != letters[index+1]
          nonRepeat << letter
        end
      end
      if !flip
        if letter == letters[index+1]
          flip = true
        elsif letter != letters[index+1]
          flip = true
          nonRepeat << letter
        end
      end
  end
  if letters[letters.size-1] != letters[letters.size-2]
    nonRepeat << letters[letters.size-1]
  end
  if nonRepeat[0] == nil
    return false
  else
    return nonRepeat[0]
  end
end
