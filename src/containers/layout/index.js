import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import history from '../../history';
import logo from '../../logo.svg';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Navbar from '../../components/navbar';
import Routerbar from '../../components/routerbar';

export default class Layout extends Component {
    render() {
        const app = (
          <div className="layout">
            <Navbar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon
                        key="0"
                        type="search"
                        style={{ marginRight: '16px' }}
                    />,
                    <Icon key="1" type="ellipsis" />
                ]}
            >
                NavBar
            </Navbar>
            <Button type="ghost" size="small">
                small
            </Button>
            <Routerbar mode="light">
                <Routerbar.Item to="/home" title="首页" icon={<Icon type="search"></Icon>}/>
                <Routerbar.Item to="/chanel" title="末尾" icon={<Icon type="qrcode"></Icon>}/>
            </Routerbar>
        </div>
        )
        return (
            <ConnectedRouter history={history}>
              {app}
            </ConnectedRouter>
        );
    }
}