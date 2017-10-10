# In Array Advanced
#
# Don't use any array helper methods except for .each
#
# This is the same as yesterday's challenge with one improvement.
# in_array_advanced takes an additional boolean argument 'strict'.
# If strict is true, in_array should care about leTteR CasIng.
# If strict is false, in_array should return true for any match.
#
# Difficulty:
# 4/10
#
# Example:
# in_array("HeLLo", ["hi", "howdy", "HeLLo"], true) should return true
# in_array("DrAkE", ["jayz", "kanye", "drake"], false) should return true
# in_array("DrAkE", ["jayz", "kanye", "yachty"], false) should return flse
#
# Check your solution by running the tests:
# ruby tests/08_in_array_advanced_test.rb
#

def in_array_advanced (needle, haystack, strict)
  if strict
    haystack.each { |word| return true if word == needle }
  else
    haystack.each { |word| return true if word.downcase == needle.downcase }
  end
  return false
end

# if !strict
#   haystack.each do |word|
#     if word != needle
#       false
#     end
#   end
# end

  # for needle in haystack do
  #   needle.split([/A-z/]) == needle.downcase
  #   haystack.downcase == haystack.downcase
  #   return true
  # end
  #
  # else strict == false
  #   for needle in haystack do
  #     needle.scan[/a-z/]
  #     haystack.scan[/a-z/]
  #     return false
  #   end
  # end
