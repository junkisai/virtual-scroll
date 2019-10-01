import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import configureStore, { history } from '../configureStore'; 
import TopContainer from '../pages/TopContainer';

const store = configureStore();

const App = styled.div`
`;

ReactDOM.render(
  <App>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={TopContainer} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </App>,
  document.getElementById('app'),
);
