def binary_and (b1, b2)
  result = ''
  b1.length.times do |count|
    if b1[count] == "1" and b2[count] == "1"
      result += "1"

    #  return true
    else
      result += '0'
      #return false
    end
  end
  result
end
puts binary_and("1101", "101")
puts binary_and("111", "111")
# for total_letters do |i|
#   if i == 1
#     return true
#   else
#     false
#   end
#   return total_letters
#
# # end
