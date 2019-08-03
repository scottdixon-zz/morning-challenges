# Unique
#
# Ruby has a handy array.unique helper which removes
# duplicates. Imlpement your own version of the helper,
# without using .unique.
#
# Difficulty:
# 5/10
#
# Example:
# unique([1,2,3,3]) should return [1,2,3]
# unique(["tom", "tom", "tom"]) should return ["tom"]
#
# Hints:
# A hash could be helpful in your solution.
#
# Check your solution by running the tests:
# ruby tests/09_unique_test.rb
#

def unique (mylist)
  list = Array.new
  mylist.each do |string|
     list.push(string) unless list.include?(string)
  end
list
end

# or

def unique (mylist)
  list = []
  mylist.each do |string|
     list << string unless list.include?(string)
  end
list
end

#or

def unique (mylist)
  mylist&mylist
end
