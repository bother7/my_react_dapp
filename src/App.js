import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import PropTypes from 'prop-types';
import Web3 from 'web3'
import {abi} from './abi'


class App extends Component {

  componentDidMount ()  {
    this.web3Provider = new Web3.providers.HttpProvider("http://localhost:8545")
    this.web3 = new Web3(this.web3Provider)
    console.log(JSON.stringify(abi))
    var ParcelContract = new this.web3.eth.Contract(JSON.parse(JSON.stringify(abi)))
    debugger
    console.log(this.web3.eth)
  }

  render() {



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
