require 'test/unit'
require_relative '../16_page_title'

class IncludedOnceTest < Test::Unit::TestCase
  def test_google
    assert_equal("Google", pageTitle("http://google.com"))
  end
  def test_facey
    assert_equal("reddit: the front page of the internet", pageTitle("http://www.reddit.com"))
  end
end
