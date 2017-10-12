require 'test/unit'
require_relative '../10_dictionary'

class UniqueTest < Test::Unit::TestCase
  def test_dictionary_add_word
    dictionary = Dictionary.new
    assert_nothing_raised do
      dictionary.add_word('ruby', 'A precious stone')
    end
  end
  def test_dictionary_total_words
    dictionary = Dictionary.new
    dictionary.add_word('ruby', 'A precious stone')
    assert_equal(1, dictionary.total_words)
    dictionary.add_word('rails', 'Lorem ipsum')
    assert_equal(2, dictionary.total_words)
  end
  def test_dictionary_lookup
    dictionary = Dictionary.new
    dictionary.add_word('ruby', 'A precious stone')
    dictionary.add_word('rails', 'Lorem ipsum')
    assert_equal('A precious stone', dictionary.lookup('ruby'))
    assert_equal('Lorem ipsum', dictionary.lookup('rails'))
  end
end
