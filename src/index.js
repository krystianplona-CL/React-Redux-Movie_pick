import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';
import './style.css';

const createStoreWithMiddlewere = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddlewere(reducers)}>
    <App />
  </Provider>, 
  document.getElementById('root'));
  
registerServiceWorker();
