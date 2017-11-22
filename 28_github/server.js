/* 

  GitHub API

  Our express app is hitting the GitHub API and returning information
  about a user.

  * Don't run the server until step 3 *

  1. Check out the GitHub API response of:
     https://api.github.com/users/[your-user-name]

  2. Look at the code below and think about what it's doing. 

  3. Start the server and head to:
     http://localhost:3000/github/[your-github-username]
     You'll see we're listing the user's username

  4. List more information in the view (location, total repos, etc)

  5. Beast mode: Can you list each of the users repos in the view?
     (hint: https://api.github.com/users/<github-user>/repos)
  
*/

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Tell express to use Pug
app.set('view engine', 'pug')

// Whenever a user goes to /github/*anything*
app.get("/github/:username", (req, res) => {
  // We can get the username from the URL using req.params
  let username = req.params.username;

  // Hit GitHub's API to get information about a user
  axios.get('https://api.github.com/users/' + username)
       .then((response) => {
         // Everything worked. Response.data has all the GitHub info
         // Render our github.pug file and hand it all the info
         res.render('github', {githubDetails: response.data});
       }).catch(function (error) {
         // Something went wrong
         console.log(error);
         res.send('Whoops! Something went wrong.');
       });
});

// Listen for connections (turn the server on)
app.listen(port);
console.log("Listening on port " + port);
