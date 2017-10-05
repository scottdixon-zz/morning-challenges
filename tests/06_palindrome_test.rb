require 'test/unit'
require_relative '../06_palindrome'

class LargestNumberTest < Test::Unit::TestCase
  def test_palindrome
    assert_equal(false, palindrome("hello"))
    assert_equal(true, palindrome("racecar"))
  end
end
