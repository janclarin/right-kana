import React, { Component } from 'react';
import KanaBox from './KanaBox';

class KanaTable extends Component {
  constructor(props) {
    super(props);
    this.handleItemOnClick = this.handleItemOnClick.bind(this);
    this.renderBox = this.renderBox.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  handleItemOnClick(kana, romaji) {
    this.props.onItemClick(kana, romaji);
  }

  renderBox(kana, index) {
    const kanaChar = kana ? kana.kana : '';
    const kanaRomaji = kana ? kana.romaji : '';

    return (
      <KanaBox
        key={kanaRomaji + index}
        kana={kanaChar}
        romaji={kanaRomaji}
        onClick={() => this.handleItemOnClick(kana)}
      />
    );
  }

  renderRow(kanaRow) {
    return <div key={kanaRow[0].romaji}>{kanaRow.map(this.renderBox)}</div>;
  }

  render() {
    const { kanaGrid } = this.props;
    return <div>{kanaGrid.map(this.renderRow)}</div>;
  }
}

export default KanaTable;
