import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducer from './reducers/index'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { Web3Provider } from 'react-web3';


const loggerMiddleware = createLogger()
let store = createStore(reducer,
  applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    ))

ReactDOM.render(  <Provider store={store}><Web3Provider>
    <Router>
      <Route path="/" component={App} />
    </Router>
    </Web3Provider>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
