import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import configureStore, { history } from '../configureStore'; 
import TopContainer from '../pages/TopContainer';

const store = configureStore();

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={TopContainer} />
        </Switch>
      </ConnectedRouter>
    </Provider>
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById('app'),
);
