# Take a look at this Brisbane's weather this week (as JSON):
# https://api.myjson.com/bins/ga3o3
#
# Use http://jsonprettyprint.com to understand the ugly JSON data.
#
# Your challange is to use puts to:
# - List the latitude, longitude and timezone.
# - List each day's summary and maximum.
#
# Beast mode:
# - Use the timestamp to show the day of the week too
# e.g. Monday: Showers 28, Tuesday: Party Cloudy 26

# We need some gems to help us out
require 'rubygems'
require 'json'
require 'net/http'
require 'uri'
require 'date'

# URL for our JSON
weather_json_url = 'https://api.myjson.com/bins/ga3o3'

# Use net/http to read the URL
weather_raw_json = Net::HTTP.get(URI.parse(weather_json_url))

# Parse the JSON and assign it to 'weather' variable
weather = JSON.parse(weather_raw_json)

# Your code here!
puts "Brisbane's latitude is #{weather['latitude']}."
puts "Brisbane's longitude is #{weather['longitude']}."
puts "Brisbane's timezone is #{weather['timezone']}."

weather["daily"]["data"].each do |day|
    puts "The weather summary for #{Time.at(day["time"]).to_datetime}is: #{day["summary"]}"
    puts "That day's max temp: #{day["temperatureMax"]}."
end
