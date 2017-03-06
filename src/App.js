import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResultContainer from './components/Container.js'
import SearchContainer from './components/SearchContainer.js'

class App extends Component {
  render() {
    return (
      <div>
        <SearchContainer></SearchContainer>
        <ResultContainer></ResultContainer>
      </div>
    );
  }
}

export default App;
