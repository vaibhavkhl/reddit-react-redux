import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResultListContainer from './components/ResultListContainer.js'
import SearchContainer from './components/SearchContainer.js'

class App extends Component {
  render() {
    return (
      <div>
        <SearchContainer></SearchContainer>
        <ResultListContainer></ResultListContainer>
      </div>
    );
  }
}

export default App;
