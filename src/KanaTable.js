import React, { Component } from 'react';
import KanaBoxRow from './KanaBoxRow';

class KanaTable extends Component {
  render() {
    const { kanaGrid, showHiragana } = this.props;

    return (
      <div>
      {
        kanaGrid.map(kanaRow => {
          const key = kanaRow[0]['romaji'];
          return <KanaBoxRow key={key} kanaRow={kanaRow}
            showHiragana={showHiragana} />;
        })
      }
      </div>
    );
  }
}

export default KanaTable;
