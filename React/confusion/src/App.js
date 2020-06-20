import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

// use 'className' instead of 'class'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
