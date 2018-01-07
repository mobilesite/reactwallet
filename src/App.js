import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
import Button from './components/button';
import Icon from './components/icon';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</Navbar>
        <p className="App-intro">
          <Button type="ghost" size="small">small</Button>
          <Icon type="qrcode"></Icon>
        </p>
      </div>
    );
  }
}

export default App;
