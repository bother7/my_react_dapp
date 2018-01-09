import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Web3 from 'web3'

class App extends Component {

  render() {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    console.log(web3)
    return (
      <div className="App">
        <header className="App-header">
        deal with contract here
        </header>

      </div>
    );
  }
}

// App.contextTypes = {
//   web3: PropTypes.object
// };

export default App;
