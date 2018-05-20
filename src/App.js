import React, { Component } from 'react';
import Usercard from './components/Usercard'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to ComStack</h1>
        </header>
        <Usercard />
      </div>
    );
  }
}

export default App;
