/*

Here's some code using callbacks. We've created a waitFor function that takes
delay (number of seconds to wait) and cb (the callback to run after the delay).

I.e. when you're finished, do _this_ next thing.

We need to use callbacks because the code is asynchronous. We have no idea
when each waitFor will finish, or in which order.

What do you think you'll see when you run this code?

Run the code to validate your expectations.

*/

const waitFor = (delay, cb) => {
  setTimeout(cb, delay * 1000) // setTimeout delay is in milliseconds
}

waitFor(3, () => {
  console.log('Finished waiting for 3 seconds!')
})

waitFor(1, () => {
  console.log('Finished waiting for 1 second!')
})


/*

PROMISES
--------

We can also use Promises to manage async code.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

Comment out 21-27. See if you can rewrite the waitFor method to return a promise.
Hint: you can remove the cb argument.

If your solution is correct, the following code should work:

*/

// waitFor(3).then(() => {
//   console.log('Finished waiting for 3 seconds!')
// })
//
// waitFor(1).then(() => {
//   console.log('Finished waiting for 1 second!')
// })


/*

BEAST MODE
----------

Pass a value to resolve and pick it up in your .then

*/

// waitFor(3).then((response) => {
//   console.log(response)
// })


/*

BEAST MODE++
------------

Chain your .thens to manage flow. Goal:
- Finished waiting for 3 seconds!
- Finished waiting for 1 second!
(In that order)

Hint: You won't need to update the waitFor method. Research chaining promises.

*/
