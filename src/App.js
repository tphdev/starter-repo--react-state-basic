import React, { Component } from 'react';
import ShowHide from './components--complete/ex-01-showHide';
import FilterableList from './components--complete/ex-02-filterableList';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <h1>React State</h1>
        <ShowHide/>
        <hr/>
        <FilterableList/>
      </div>
    );
  }
}

export default App;
