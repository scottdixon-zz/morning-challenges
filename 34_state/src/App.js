/*

  Where should state live?

  Get the below app working. It should track how many times
  each button has been clicked.

  Hint: Each button should have it's own state.

  Beast mode:
  Add a button "Click here to add another button"
  Add a "Total clicks" to the top of the App component.

*/
import React, { Component } from 'react';
import Button from './components/Button'
import './App.css';
let currentId = 1
const genId = () => ++currentId

// let totalClicks = 0
// const newClicks = () => ++totalClicks

class App extends Component {
  state = {
    buttons: [],
    totalClicks: 0
  }
  handleAddButton = () => {
    this.setState(prevState => ({
      buttons: [...prevState.buttons, genId()],
      // totalClicks: prevState.totalClicks + 1
    }))
  }
  handleTotalClicks = () => {
    this.setState(prevState => ({
      totalClicks: prevState.totalClicks + 1
    }))
  }


  render() {
    return (
      <div className="App">
        <p>total clicks: {this.state.totalClicks}</p>
        <button onClick={this.handleAddButton}>Add another button please</button>
        <div>
          {
            this.state.buttons.map(id=> <Button key={id}
                                                parentsHandleTotalClicks={this.handleTotalClicks}
            />)
          }
        </div>
      </div>

    );
  }
}

export default App;
