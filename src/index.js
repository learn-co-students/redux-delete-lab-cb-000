import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import manageBand from './reducers/manageBand'

import { Provider } from 'react-redux';



import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
//
// const store = createStore(manageBand, /* preloadedState, */ devToolsEnhancer(
//   // Specify name here, actionsBlacklist, actionsCreators and other options if needed
// ));

const store = createStore(manageBand)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
