//https://gist.github.com/scottdixon/ce988c99b67ddd9f7678cca7be89828c
// CHALLENGE
// ---------
//
// https://gist.github.com/scottdixon/ce988c99b67ddd9f7678cca7be89828c
//
// Line 13 is calling 'sayGreetings' and handing it a callback 'sayNiceToMeetYou'
// Line 14 is calling 'sayGreetings' and handing it a callback 'sayGoodbye'
//
// Fix the 'sayGreetings' function so it runs the callback each time.
//
//
//
//
//
// DESIRED OUTPUT:
// Greetings!
// Nice to meet you!
// Greetings!
// Goodbye!


//
// const sayGreetings = (greeting) => {
//   console.log('Greetings!')
//   greeting()
// }
//
// const sayNiceToMeetYou = () => {
//   console.log('Nice to meet you!')
// }
//
// const sayGoodbye = () => {
//   console.log('Goodbye!')
// }
//
// sayGreetings(sayNiceToMeetYou)
// sayGreetings(sayGoodbye)


// Remind yourself how .filter works. Build it yourself using only .forEach.
// We've started you off.

const filter = (items, callback) => {
  const results = []
  items.forEach((item) => {
    if (callback(item)) {
      results.push(item)
    }
  })
  console.log(results)
}

// I'm using your Filter method to return even numbers.
// If your filter method is correct, this code should return: [2, 4]
filter([1,2,3,4], (num) => {
  return num % 2 === 0
})
