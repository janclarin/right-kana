import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class KanaBox extends Component {
  render() {
    const { kana, romaji, onClick } = this.props;
    const style = {
      width: 50,
      height: 72
    };

    return (
      <Button style={style} disabled={!kana} onClick={onClick}>
        <h4>{kana}</h4>
        <h6>{romaji}</h6>
      </Button>
    );
  }
}

export default KanaBox;
