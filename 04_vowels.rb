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

def vowels(string)
	vgroup = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  group = []
  string.split('').each do |letter|
  	if vgroup.include?(letter)
  		group.push(letter)
	  end
	end
	group
end