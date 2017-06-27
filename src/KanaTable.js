import React, { Component } from 'react';
import KanaBox from './KanaBox';

class KanaTable extends Component {
  renderRow(kanaRow) {
    return (
      <div key={kanaRow[0].romaji}>
        {kanaRow.map((kana, index) => (
          <KanaBox
            key={kana.romaji + index}
            kana={kana.kana}
            romaji={kana.romaji}
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
