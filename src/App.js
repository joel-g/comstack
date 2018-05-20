import React, { Component } from 'react';
import Usercard from './components/Usercard'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stackIds: ['8826629','9541448', '6591675', '7452904', '9393813', '8840926', '9454112', '7287446', '9598801', '9541439', '9554961', '8797362', '8748848', '9672092', '9603809', '9536851', '8366814', '9541510', '9541342']
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to ComStack</h1>
        </header>
        {
          this.state.stackIds.map(user => <Usercard user_id={user} />)
        }
      </div>
    );
  }
}

export default App;