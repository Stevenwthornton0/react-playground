import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who: 'world',
  }

  handleButtonClickWorld = () => {
    const newWho = 'world'
    this.setState({
      who: newWho
    })
  }

  handleButtonClickFriend = () => {
    const newWho = 'friend'
    this.setState({
      who: newWho
    })
  }

  handleButtonClickReact = () => {
    const newWho = 'react'
    this.setState({
      who: newWho
    })
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={this.handleButtonClickWorld} value='world'>world</button>
        <button onClick={this.handleButtonClickFriend} value='friend'>friend</button>
        <button onClick={this.handleButtonClickReact} value='React'>React</button>
      </div>
    )
  }
}

export default HelloWorld;