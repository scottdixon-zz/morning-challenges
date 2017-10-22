require 'test/unit'
require_relative '../15_exes_and_ohs'

class IncludedOnceTest < Test::Unit::TestCase
  def test_balanced
    assert_equal(true, ExesAndOhs("ooxx"))
  end
  def test_unbalanced
    assert_equal(false, ExesAndOhs("xooxx"))
  end
  def test_other_letters
    assert_equal(true, ExesAndOhs("sxoowxxoq"))
  end
  def test_case_insensitive_balanced
    assert_equal(true, ExesAndOhs("oOxXxoXo"))
  end
  def test_case_insensitive_unbalanced
    assert_equal(false, ExesAndOhs("oOxXxoX"))
  end
  def test_zero_count
    assert_equal(true, ExesAndOhs("zpzpzpp"))
  end
end
