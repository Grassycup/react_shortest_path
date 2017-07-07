import React, { Component } from 'react';
import logo from './logo.svg';
// import Heapd3 from './visual/heapd3'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './page/main/main.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import HeapTabComponent from './page/heap/heaptab.js';
import AppBar from 'material-ui/AppBar';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<MuiThemeProvider>*/}
          {/*<AppBar*/}
            {/*title="Happy App"*/}
            {/*iconClassNameRight="muidocs-icon-navigation-expand-more"*/}
          {/*/>*/}
        {/*</MuiThemeProvider>*/}
        <MuiThemeProvider>
          <HeapTabComponent />
        </MuiThemeProvider>


      </div>
    );
  }
}

export default App;
