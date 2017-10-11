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
#
#array style
def unique (mylist)
clean = []
duplicate = []
  mylist.each do |value|
    if !clean.include?(value)
        clean.push(value)
    else
      duplicate.push(value)
    end
  end
  return clean
end

#hash style
def unique (mylist)
  clean = {}
  duplicate = []
  mylist.each do |value|
    if value != true
      clean[value] = value
    else
      duplicate.push(value)
    end
  end
   clean.keys
end

#and the refactored version
def unique (mylist)
  #compares mylist with itself and returns as a union
  mylist & mylist
end
