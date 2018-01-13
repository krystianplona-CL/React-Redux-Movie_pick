import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddlewere = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddlewere(reducers)}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
