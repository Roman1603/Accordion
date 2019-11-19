import React, { Component } from 'react';

export default class Accordion extends Component {
  static defaultProps = { sections: [] }
  state = {
    currentSectionIndex: null,
  }

  handleButtonClick = (index) => {
    this.setState({ currentSectionIndex: index })
  }




  renderContent(section, idx, currentSectionIndex) {

    return (
      <li className='content' key={idx}>
        <button type='button' onClick={() => this.handleButtonClick(idx)}>
          {section.title}
        </button>
        {(currentSectionIndex === idx) && <p>{section.content}</p>}
      </li>
    )
  }

  render() {
    const { currentSectionIndex } = this.state
    const { sections } = this.props
    return (<div>
      {sections.map((section, idx) =>
        this.renderContent(section, idx, currentSectionIndex)
      )}
    </div>);
  }
}

