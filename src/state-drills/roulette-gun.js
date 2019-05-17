import React from 'react';

class RouletteGun extends React.Component {

  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false
  };

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  clickEvent = () => {
    this.setState({
      spinningTheChamber: true
    })
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8)
      
      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false
      })
    }, 2000)
  }

  displayRender() {
    const {bulletInChamber} = this.props
    if(this.state.spinningTheChamber === true) {
      return 'spinning the chamber and pulling the trigger!...'
    } else if (this.state.chamber === bulletInChamber) {
      return 'BANG!!'
    } else {
      return 'you\'re safe!'
    }
  }

  render() {
    return(
      <div>
        <p>{this.displayRender()}</p>
        <button onClick={this.clickEvent}>
          Pull the trigger!
        </button>
      </div>
    )
  }
}

export default RouletteGun