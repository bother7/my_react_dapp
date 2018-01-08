import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {

  render() {
    console.log(this.context)
    return (
      <div className="App">
        <header className="App-header">
        deal with contract here
        </header>

      </div>
    );
  }
}

App.contextTypes = {
  web3: PropTypes.object
};

export default App;
