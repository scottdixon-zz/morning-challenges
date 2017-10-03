require 'test/unit'
require_relative '../03_sum_numbers'

class LargestNumberTest < Test::Unit::TestCase
  def test_sum_numbers
    assert_equal(3, sum_numbers([1,1,1]))
    assert_equal(117, sum_numbers([5,2,100,0,10]))
  end
end
