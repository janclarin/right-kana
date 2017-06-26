import React, { Component } from 'react';
import KanaBox from './KanaBox';

class KanaBoxRow extends Component {
  render() {
    const { kanaRow, showHiragana } = this.props;
    const kanaType = showHiragana ? 'hiragana' : 'katakana';

    return (
      <div>
      {
        kanaRow.map(kana => {
          const romaji = kana['romaji'];
          return <KanaBox key={romaji} kana={kana[kanaType]} romaji={romaji} />;
        })
      }
      </div>
    );
  }
}

export default KanaBoxRow;
