import React, { Component } from 'react';
import KanaBox from './KanaBox';

class KanaBoxRow extends Component {
  render() {
    const { kanas, isHiragana } = this.props;
    const kanaType = isHiragana ? 'hiragana' : 'katakana';

    return (
      <div>
      {
        kanas.map(kana => {
          const romaji = kana['romaji'];
          return <KanaBox key={romaji} kana={kana[kanaType]} romaji={romaji} />
        })
      }
      </div>
    );
  }
}

export default KanaBoxRow;
