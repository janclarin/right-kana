import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import './App.css';
import { KANA } from './constants/kana';
import Toggle from './Toggle';
import KanaTable from './KanaTable';

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

  render() {
    const activeToggleIndex = this.state.showHiragana ? 0 : 1;
    return (
      <div className="App">
        <PageHeader>Right Kana</PageHeader>
        <Toggle toggleTitles={this.kanaTypeTitles}
                activeToggleIndex={activeToggleIndex}
                onSelectionChange={this.handleKanaToggleChange}/>
        <KanaTable kanaGrid={KANA} showHiragana={this.state.showHiragana} />
      </div>
    );
  }
}

export default App;
