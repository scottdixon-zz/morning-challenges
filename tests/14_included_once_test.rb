require 'test/unit'
require_relative '../14_included_once'

class IncludedOnceTest < Test::Unit::TestCase
  def test_included_once
    assert_equal(false, includedOnce(['hello','hi','hi'], 'hi'))
    assert_equal(true, includedOnce(['hello','hi','hey'], 'hi'))
  end
  def test_included_once_no_matches
    assert_equal(false, includedOnce(['hello','hey','hey'], 'hi'))
  end
end