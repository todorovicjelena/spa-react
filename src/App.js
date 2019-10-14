import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Oscars 2020"/>
      </div>
    )
  }
}

export default App;