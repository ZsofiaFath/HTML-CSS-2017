import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box';

class App extends Component {
  render() {
    const total = (1 + 2 + 3) / 4;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sup</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>{total}</h2>
        <Box text="Box 1" title="New and fancy Title"/>
        <Box text="Box 2" title="Sup Title"/>
        <Box text="Box 1000" title= "Mini Sup Title"/>

      </div>
    );
  }
}

export default App;
