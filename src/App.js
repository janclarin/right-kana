import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
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
    this.kanaTypeTitles = ['Hiragana', 'Katakana'];
  }

  handleKanaToggleChange(kanaToggleIndex) {
    const showHiragana = kanaToggleIndex === 0;
    this.setState({showHiragana: showHiragana});
  }

  getKanaGrid() {
    return this.state.showHiragana ? HIRAGANA : KATAKANA;
  }

  render() {
    var activeToggleIndex = this.state.showHiragana ? 0 : 1;
    var kanaGrid = this.getKanaGrid();

    return (
      <div className="App">
        <PageHeader>Right Kana</PageHeader>
        <Toggle toggleTitles={this.kanaTypeTitles}
                activeToggleIndex={activeToggleIndex}
                onSelectionChange={this.handleKanaToggleChange}/>
        <KanaTable kanaGrid={kanaGrid} />
      </div>
    );
  }
}

export default App;
