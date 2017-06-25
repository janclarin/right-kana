import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class KanaBox extends Component {
  render() {
    const {kana, romaji} = this.props

    return (
      <Button>
        <h2>{kana}</h2>
        <h5>{romaji}</h5>
      </Button>
    );
  }
}

export default KanaBox;
