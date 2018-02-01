import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock.js';


class App extends Component {
  componentDidMount() {
    this.refs.clock.on30MinutesPassed(function () { alert("times up"); })
  }
  render() {
    return (
      <div>
        <Clock ref="clock" />
      </div>
    );
  }
}



export default App;
