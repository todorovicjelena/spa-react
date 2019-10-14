import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Oscars 2020"/>
        <Home title="Oscar Winners"/>
      </div>
    )
  }
}

export default App;