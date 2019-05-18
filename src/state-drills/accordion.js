import React from 'react';

class Accordion extends React.Component {
  static defaultProps = {
    sections: [],
  }

  state = {
    currentTabIndex: undefined,
  }

  handleClick = (index) => {
    this.setState({
      currentTabIndex: index,
    })
  }

  renderList(currentTabIndex) {
    return this.props.sections.map((tab, index) => (
      <li key={index}>
        <button
          type='button'
          onClick={() => this.handleClick(index)}
        >
          {tab.title}
        </button>
        {(currentTabIndex === index) && <p>{tab.content}</p>}
      </li>
    ))
  }
  
  render() {
    const { currentTabIndex } = this.state
    return(
      <ul>
        {this.renderList(currentTabIndex)}
      </ul>
    )
  }
}

export default Accordion;