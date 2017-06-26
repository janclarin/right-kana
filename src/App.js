import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import KanaTable from './KanaTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader>Right Kana</PageHeader>
        <KanaTable />
      </div>
    );
  }
}

export default App;
