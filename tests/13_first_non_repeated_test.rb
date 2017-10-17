require 'test/unit'
require_relative '../13_first_non_repeated'

class FirstNonRepeatedTest < Test::Unit::TestCase
  def test_first_letter
    assert_equal('a', firstNonRepeat('awwwhhhggge'))
  end

  def test_middle_letter
    assert_equal('d', firstNonRepeat('aaaabbbcccdeeefgh'))
  end

  def test_last_letter
    assert_equal('e', firstNonRepeat('wwwhhhggge'))
  end

  def test_no_repeats
    assert_equal(false, firstNonRepeat('wwwhhhggg'))
  end

end
