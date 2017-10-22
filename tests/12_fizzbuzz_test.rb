require 'test/unit'
require_relative '../12_fizzbuzz'

class NthFibonacciTest < Test::Unit::TestCase
  def test_nth_fizzbuzz
    assert_equal(0, nthFibonacci(0))
  end
end
