import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class KanaBox extends Component {
  render() {
    const { kana, romaji } = this.props;
    const style = {
      width: 50,
      height: 66
    }

    return (
      <Button style={style} disabled={!kana}>
        <h4>{kana}</h4>
        <h6>{romaji}</h6>
      </Button>
    );
  }
}

export default KanaBox;
