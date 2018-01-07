import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Link, BrowserRouter, HashRouter } from 'react-router-dom';
import store from './store';
import './styles/index.less';
import Layout from './containers/layout';


render(
    <Provider store={store}>
        <Layout/>
    </Provider>, 
    document.getElementById('__APP_RENDER_NODE__')
);
