import React, { Component } from 'react';
import KanaBox from './KanaBox';

class KanaTable extends Component {
  constructor(props) {
    super(props);
    this.handleItemOnClick = this.handleItemOnClick.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  handleItemOnClick(kana, romaji) {
    this.props.onItemClick(kana, romaji);
  }

  renderRow(kanaRow) {
    return (
      <div key={kanaRow[0].romaji}>
        {kanaRow.map((kana, index) => (
          <KanaBox
            key={kana.romaji + index}
            kana={kana.kana}
            romaji={kana.romaji}
            onClick={() => this.handleItemOnClick(kana)}
          />
        ))}
      </div>
    )
  }

  render() {
    const { kanaGrid } = this.props;
    return <div>{kanaGrid.map(this.renderRow)}</div>;
  }
}

export default KanaTable;
