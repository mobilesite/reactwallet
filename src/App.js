import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import logo from './logo.svg';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br/>
          <Button type="ghost" size="small" inline>small</Button>
          <a className="ej-btn--primary">111</a>
        </p>
      </div>
    );
  }
}

export default App;
