import React, { Component } from 'react';
import ShowHide from './components/showHide';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <h1>React State - Basics</h1>
        <ShowHide/>
      </div>
    );
  }
}

export default App;
