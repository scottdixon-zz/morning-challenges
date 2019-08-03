/* 

  Our login form is broken!

  Right now, users can get through with any password. Try it out.

  Help!

  1. Only let users through if they enter the password 'dog'.
     (Hint: you'll need body-parser to get the form info)
  2. Return a 401 if any other password is entered.

  Beast mode:

  1. Only let users through if they also check "I agree".
  2. Add an email field to the login form. Update your password check.
  3. Store a list of users, along with their passwords in an array of objects.
     Update your password check to use this array for authentication.
  4. Keep count of login failures. Display these on the 401 page.
     E.g. "You've tried to login 3 times". Make sure it works per user.
  5. Reset the login failures to 0 if they successfully log in.
  6. Store the users in mongo instead on this file.
  
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let users = {
  'test@match.com': {
    password: 'cricket',
    login_count: 0
  },
  'ashes@match.com': {
    password: 'cricket11',
    login_count: 0
  },
  'notcricket@fan': {
    password: 'cricketsux',
    login_count: 0
  }
};


// Allow access to everything in /public.
// This is for our stylesheets & images.
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

// Views #thepuglifechoseme
app.set('view engine', 'pug');

// Get request for login page
app.get("/", (req, res) => {
  res.render('login');
});

// Login form request
app.post("/secure", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let checkbox = req.body.agree;

  // Check email/pass
  if ((users[email] && users[email].password === password) && checkbox === 'on') {
    res.render('secure');
  } else {
    res.sendStatus(401);
  }
  // Increment login count by one _if_ the email exists
  if (users[email]) {
    users[email].login_count++;
  }
});



app.listen(3000);
console.log("Lift off!");