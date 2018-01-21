import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import State from './components/State'
import Lifecycle from './components/Lifecycle'
import ParentChild from './components/ParentChild'
import ChildParent from './components/ChildParent'
import ChildChild from './components/ChildChild'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <State />
        <Lifecycle />
        <ParentChild />
        <ChildParent />
        <ChildChild />
      </div>
    );
  }
}

export default App;
