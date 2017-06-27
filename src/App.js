import React, { Component } from 'react';
import './App.css';
import Toggle from './Toggle';
import KanaTable from './KanaTable';
import { HIRAGANA, KATAKANA } from './constants/kana';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHiragana: true
    };
    this.handleKanaToggleChange = this.handleKanaToggleChange.bind(this);
    this.kanaTypeTitles = ['か', 'カ'];
  }

  handleKanaToggleChange(kanaToggleIndex) {
    const showHiragana = kanaToggleIndex === 0;
    this.setState({showHiragana: showHiragana});
  }

  getToggleSelectionIndex() {
    return this.state.showHiragana ? 0 : 1;
  }

  getKanaGrid() {
    return this.state.showHiragana ? HIRAGANA : KATAKANA;
  }

  render() {

    return (
      <div className="App">
        <h1><small>Right Kana</small></h1>
        <Toggle toggleTitles={this.kanaTypeTitles}
                selectedToggleIndex={this.getToggleSelectionIndex()}
                onSelectionChange={this.handleKanaToggleChange}/>
        <KanaTable kanaGrid={this.getKanaGrid()} />
      </div>
    );
  }
}

export default App;
