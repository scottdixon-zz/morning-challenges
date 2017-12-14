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
import './App.css';

class App extends Component {
  state = {
    buttons: [
      {id: 0, totalClicks: 0},
      {id: 1, totalClicks: 1},
      {id: 2, totalClicks: 6},
      {id: 3, totalClicks: 4},
      {id: 4, totalClicks: 2},
      {id: 5, totalClicks: 5},
      {id: 6, totalClicks: 1},
      {id: 7, totalClicks: 3}
    ]
  }

  // const CreateButton = (props) => {
  //   return (
  //     <button onClick={props.onClick}>
  //       I have been clicked {props.totalClicks} times
  //     </button>
  //   );
  // };

  onClick = () => {
    // console.log(this.state.buttons[0].totalClicks);
    const { totalClicks } = this.state.buttons[0]
    const total = totalClicks + 1
    this.setState({
      totalClicks: total
    })
  }

  render() {
    const { buttons } = this.state
    return (
      <div className="App">
        {/* {CreateButton totalClicks={ totalClicks } /} */}
        {buttons.map(button => (
          <button onClick={this.onClick}>I have been clicked { button.totalClicks } times</button>
        ))}
      </div>
    );
  }
}












export default App;
