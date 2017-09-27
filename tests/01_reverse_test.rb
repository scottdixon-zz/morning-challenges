require 'test/unit'
require_relative '../01_reverse'

class ReverseTest < Test::Unit::TestCase
  def test_reverse_string
    original_word = "hello"
    reverse_word = reverse(original_word)
    assert_equal("olleh", reverse_word)
  end
end
