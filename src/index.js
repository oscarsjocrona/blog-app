import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './Store/Reducers/index';
// const store = createStore(navigationReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

const app = (
  <Provider store={store}>
    <App> </App>
  </Provider>);

ReactDOM.render(app,
  document.getElementById('root')
);

