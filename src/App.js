import React, { Component } from 'react';
import KanaBox from './KanaBox';
import { KANA } from './constants/kana';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          KANA.map(kanaInfo => {
            const kana = kanaInfo['hiragana'];
            const romaji = kanaInfo['romaji'];
            return <KanaBox kana={kana} romaji={romaji} />
          })
        }
      </div>
    );
  }
}

export default App;
