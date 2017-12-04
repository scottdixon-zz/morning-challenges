/*

  Loading Screen

  Run this React app. You'll notice there's a 2-3 second delay before the
  user's email is displayed. Seems like pretty bad UX.

  Challenge:
  - Display a loading message before showing the welcome message.
  (hint: add an isLoading boolean to your state)

  Beast mode:
  - There's no error handling in our axios call! Fix this.
    (you can simluate an error by changing the https request to http)
  - Display a message to the user if something goes wrong.
  - Refactor the axios GET to use async/await instead of .then

*/

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  // Our initital state. An empty userEmail.
  state = {
    userEmail: ''
  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Welcome, { this.state.userEmail }
        </p>
      </div>
    );
  }
  componentDidMount() {
    // setTimeout added to simulate a slow network
    setTimeout(() => {
      // Get a random user from the randomuser api
      axios.get('https://randomuser.me/api/').then((response) => {
        // Update the state with the random user's email
        this.setState({
          userEmail: response.data.results[0].email
        })
      })
    }, 2000)
  }
}

export default App;
