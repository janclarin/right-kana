import React, { Component } from 'react';
import KanaBox from './KanaBox';

class KanaBoxRow extends Component {
  render() {
    const { kanaRow } = this.props;

    return (
      <div>
        {
          kanaRow.map((kana, index) => {
            const key = kana.romaji + index;
            return <KanaBox key={key} kana={kana.kana} romaji={kana.romaji} />;
          })
        }
      </div>
    );
  }
}

export default KanaBoxRow;
