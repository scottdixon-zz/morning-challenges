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

const bodyParser = require('body-parser');
const session = require('express-session')
const express = require('express');
const users = require('./database');
const app = express();

// Allow access to everything in /public.
// This is for our stylesheets & images.
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
  secret: 'Js Ninja',
  resave: false,
  saveUninitialized: true
}));

// Views #thepuglifechoseme
app.set('view engine', 'pug')

app.get("/", (req, res) => {
  res.render('login');
});

app.post("/secure", (req, res) => {
  const email = req.body.email
  req.session.email = email;
  if (users[email].password === req.body.password && req.body.agree === 'on'){
    req.session.attempts = 0
    res.render('secure', {email: req.session.email});
  } else {
    if(email == req.session.email){
      if (!req.session.attempt){
        req.session.attempt = 0;
      }
      let totalVisits = req.session.attempt + 1;
      if (req.session.attempt == 3){
        res.send(401);
      } else {
        res.render('login');
      }
    } else {
      res.send(401);
    }
  };
});

app.listen(3000);
