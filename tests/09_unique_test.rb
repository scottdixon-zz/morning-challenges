require 'test/unit'
require_relative '../09_unique'

class UniqueTest < Test::Unit::TestCase
  def test_unique
    assert_equal([1,2,3], unique([1,2,3,3]))
    assert_equal(["tom"], unique(["tom","tom","tom"]))
  end
  def test_types
    assert_equal([1,2,3,"3"], unique([1,2,2,3,"3","3"]))
  end
  def test_case
    assert_equal(["tom","ToM"], unique(["tom","ToM","tom"]))
  end
end
