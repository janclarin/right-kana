import React, { Component } from 'react';
import './App.css';
import Toggle from './Toggle';
import KanaInfoModal from './KanaInfoModal';
import KanaTable from './KanaTable';
import { HIRAGANA, KATAKANA } from './constants/kana';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHiragana: true,
      showInfoModal: false,
      selectedTableItem: {
        kana: '',
        romaji: '',
        gifUrl: ''
      }
    };
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleInfoModalClose = this.handleInfoModalClose.bind(this);
    this.handleTableItemClick = this.handleTableItemClick.bind(this);
  }

  handleToggleChange(kanaToggleIndex) {
    const showHiragana = kanaToggleIndex === 0;
    this.setState({showHiragana: showHiragana});
  }

  handleInfoModalClose() {
    this.setState({showInfoModal: false});
  }

  handleTableItemClick(kanaInfo) {
    const gifUrl = this.getGifUrl(kanaInfo.romaji);
    this.setState({
      showInfoModal: true,
      selectedTableItem: {
        kana: kanaInfo.kana,
        romaji: kanaInfo.romaji,
        gifUrl: gifUrl}
    });
  }

  getToggleSelectionIndex() {
    return this.state.showHiragana ? 0 : 1;
  }

  getKanaGrid() {
    return this.state.showHiragana ? HIRAGANA : KATAKANA;
  }

  getGifUrl(romaji) {
    const kanaFolder = this.state.showHiragana ? 'hiragana' : 'katakana';
    return '/img/kana/' + kanaFolder + '/' + romaji + '.gif';

  }

  render() {
    const kanaTypeTitles = ['か', 'カ'];
    const { kana, romaji, gifUrl } = this.state.selectedTableItem;
    return (
      <div className="App">
        <h1>
          <small>Right Kana</small>
        </h1>
        <Toggle
          toggleTitles={kanaTypeTitles}
          selectedToggleIndex={this.getToggleSelectionIndex()}
          onSelectionChange={this.handleToggleChange}
        />
        <KanaTable
          kanaGrid={this.getKanaGrid()}
          onItemClick={this.handleTableItemClick}
        />
        <KanaInfoModal
          kana={kana}
          romaji={romaji}
          gifUrl={gifUrl}
          show={this.state.showInfoModal}
          onHide={this.handleInfoModalClose}
        /> 
      </div>
    );
  }
}

export default App;
