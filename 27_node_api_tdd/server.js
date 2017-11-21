/* 

  Node API TDD

  Here's a basic book API. Familiarise yourself with the code.
  You can run the server `node server.js` and check the root
  is loading 200/OK and /books returns a list of books.

  1. There are some tests in place to save us doing the work.
     Stop the server and run the tests with `npm test`

  2. There's a 'deprecated' warning in your logs. Fix this.

  3. Add a 'year' property onto each book. Use correct TDD
     practice (update the test, watch it fail, update server.js
     to make it pass).

  4. Beast mode: add some tests to yesterday's challenge. Can you
     figure out a way to test POST?
  
*/

const express = require('express');
const app = express();
const port = 3000;

let books = [
  {
    id: 0,
    title: 'Eloquent JavaScript 2nd Edition'
  },
  {
    id: 1,
    title: 'JavaScript: The Good Parts'
  }
];

app.get("/", (req, res) => {
  res.send(200);
});

app.get("/books", (req, res) => {
  res.send(books);
});

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing
