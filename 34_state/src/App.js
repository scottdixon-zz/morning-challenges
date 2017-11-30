/*

  Where should state live?
  
  Get the below app working. It should track how many times
  each button has been clicked.

  Hint: Each button should have it's own state.

  Beast mode:
  Add a button "Clik here to add another button"
  Add a "Total clicks" to the top of the App component.

*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button>I have been clicked 0 times</button>
        <button>I have been clicked 0 times</button>
        <button>I have been clicked 0 times</button>
        <button>I have been clicked 0 times</button>
        <button>I have been clicked 0 times</button>
        <button>I have been clicked 0 times</button>
        <button>I have been clicked 0 times</button>
      </div>
    );
  }
}

export default App;
