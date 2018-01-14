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
    this.web3 = new Web3(this.web3Provider)
    console.log(JSON.stringify(abi))
    this.parcelContract = new this.web3.eth.Contract(abi, '0x91a5F24bB759CEb6901a0a8dA56333200d2D31a9')
    console.log(this.parcelContract)
  }

  createParcel = (name, id) => {
    console.log(this.parcelContract.methods.createParcel(id, name))
    this.parcelContract.methods.createParcel(id, name).send({from: '0x91a5F24bB759CEb6901a0a8dA56333200d2D31a9'})
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
