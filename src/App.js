import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  FirstComponent from './FirstComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      h1
        <header className="App-header">
        
          <img src={logo} logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with Eric
          </a>
        </header>
        <FirstComponent/>
      </div>
    );
  }
}

export default App;
