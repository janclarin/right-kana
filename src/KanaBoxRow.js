import React, { Component } from 'react';
import KanaBox from './KanaBox';

class KanaBoxRow extends Component {
  render() {
    const { kanaRow } = this.props;

    return (
      <div>
      {
        kanaRow.map(kana => {
          const romaji = kana.romaji;
          return <KanaBox key={romaji} kana={kana.kana} romaji={romaji} />;
        })
      }
      </div>
    );
  }
}

export default KanaBoxRow;
