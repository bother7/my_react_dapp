import React, { Component } from 'react';
import './App.css';
// import PropTypes from 'prop-types';
import Web3 from 'web3'
import {abi} from './abi'
import {Route} from 'react-router-dom'
import Home from './components/Home'
import MyParcels from './components/MyParcels'
import Shop from './components/Shop'
import {connect} from 'react-redux'
import Nav from './components/Nav'


class App extends Component {

  componentDidMount ()  {

    this.web3Provider = new Web3.providers.HttpProvider("http://localhost:8545")
    if (typeof Web3.givenProvider !== 'undefined') {
      this.web3 = new Web3(Web3.givenProvider)
    } else {
      this.web3 = new Web3(this.web3Provider)
    }
    this.accounts = this.web3.eth.accounts
    this.parcelContract = new this.web3.eth.Contract(abi, '0x35ad230C81c45c77ABd8cDdEd8c75C30Bed28b87')
    console.log(this.parcelContract)
    console.log(this.web3.eth.accounts)
  }

  createParcel = (name, id) => {
    console.log(this.accounts)
    this.parcelContract.methods.createParcel(id, name).send({from:'0x35ad230C81c45c77ABd8cDdEd8c75C30Bed28b87' })
    .then(receipt => {
      console.log(this.parcelContract)
      return console.log(receipt)})
  }

  render() {



    return (
      <div className="wrapper">
      <Nav />
      <Route exact path='/'  render={(props) => {return <Home createParcel={this.createParcel} />}}/>
      <Route exact path='/my_parcels' render={(props) => {return <MyParcels />}}/>
      <Route exact path='/shop' render={(props) => {return <Shop />}}/>
      </div>
    );
  }
}

// App.contextTypes = {
//   web3: PropTypes.object
// };

export default connect()(App)
