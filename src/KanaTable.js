import React, { Component } from 'react';
import KanaBoxRow from './KanaBoxRow';

class KanaTable extends Component {
  render() {
    const { kanaGrid } = this.props;

    return (
      <div>
      {
        kanaGrid.map(kanaRow => {
          // Uses the row's first kana's romaji as the key.
          const key = kanaRow[0]['romaji'];
          return <KanaBoxRow key={key} kanaRow={kanaRow} />;
        })
      }
      </div>
    );
  }
}

export default KanaTable;
