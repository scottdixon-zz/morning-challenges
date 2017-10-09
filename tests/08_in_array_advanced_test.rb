require 'test/unit'
require_relative '../08_in_array_advanced'

class InArrayTest < Test::Unit::TestCase
  def test_array_advanced_strict
    assert_equal(true, in_array_advanced("HeLLo", ["hi", "howdy", "HeLLo"], true))
    assert_equal(false, in_array_advanced("HeLLo", ["hi", "howdy", "hello"], true))
  end
  def test_array_advanced_relaxed
    assert_equal(true, in_array_advanced("HeLLo", ["hi", "howdy", "hello"], false))
    assert_equal(false, in_array_advanced("HeLLo", ["hi", "howdy", "heya"], false))
  end
end
