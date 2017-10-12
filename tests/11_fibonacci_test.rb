require 'test/unit'
require_relative '../11_fibonacci'

class NthFibonacciTest < Test::Unit::TestCase
  def test_nth_fibonacci
    assert_equal(0, nthFibonacci(0))
    assert_equal(2, nthFibonacci(3))
    assert_equal(8, nthFibonacci(6))
  end
end
