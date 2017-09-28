require 'test/unit'
require_relative '../02_largest_number'

class LargestNumberTest < Test::Unit::TestCase
  def test_largest_number
    assert_equal(20, largest_number(10,20))
    assert_equal(100, largest_number(100,50))
  end
end
