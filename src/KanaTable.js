import React, { Component } from 'react';
import KanaBoxRow from './KanaBoxRow';
import { KANA } from './constants/kana';

class KanaTable extends Component {
  render() {
    return (
      <div>
      {
        KANA.map(kanaRow => {
          const key = kanaRow[0]['romaji'];
          return <KanaBoxRow key={key} kanas={kanaRow} isHiragana={true} />
        })
      }
      </div>
    );
  }
}

export default KanaTable;
