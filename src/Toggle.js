import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class Toggle extends Component {

  handleSelectionChange(selectedIndex) {
    this.props.onSelectionChange(selectedIndex);
  }

  render() {
    const { toggleTitles, selectedToggleIndex } = this.props;
    return (
      <ButtonGroup>
      {
        toggleTitles.map((toggleTitle, index) => {
          return (
            <Button key={index}
                    onClick={() => this.handleSelectionChange(index)}
                    active={index === selectedToggleIndex}>
              {toggleTitle}
            </Button>
          )
        })
      }
      </ButtonGroup>
    );
  }
}

export default Toggle;
