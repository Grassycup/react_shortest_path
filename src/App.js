import React, { Component } from 'react';
import logo from './logo.svg';
import Heapd3 from './visual/heapd3'
import './App.css';
import Graph from './data_structure/graph.js';
import Heap from './data_structure/heap.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h2>Welcome to React</h2>*/}
        {/*</div>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        <Heapd3 />
      </div>
    );
  }
}

export default App;
