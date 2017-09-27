require 'test/unit'
require_relative '../01-reverse'

class ReverseTest < Test::Unit::TestCase
  def test_reverse_string
    original_word = "hello"
    reverse_word = reverse(original_word)
    assert_equal(reverse_word, "olleh")
  end
end
