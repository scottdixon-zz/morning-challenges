import React, {Component}from 'react'


class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: 0
    }
  }
  state = {
    clicked: 0
  }

  clickCounter = (props) => {
    this.setState(prevState => ({
      clicked: prevState.clicked + 1
    }))
    this.props.parentsHandleTotalClicks()
  }

  render() {
    return(
      <button onClick={this.clickCounter}>I' ve been clicked {this.state.clicked} times</button>
    )
  }
}


export default Button
