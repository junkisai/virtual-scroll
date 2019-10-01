import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import hogeReducer from './hoge';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  hoge: hogeReducer,
});

export default createRootReducer;
