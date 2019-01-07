import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HomePage/>
      </div>
    );
  }
}

export default (App);
