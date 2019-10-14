import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import { BrowserRouter, Route } from "react-router-dom";
// import Actors from "./components/actors";
import Actress from "./components/actress";
import Films from "./components/films";
import ActorsContainer from "./components/actorsContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="Oscars 2020" />
          <Route
            exact
            path="/"
            render={() => <Home title="Oscars Winners" />}
          />
          <Route path="/actors" render={() => <ActorsContainer title="Best Actors" />} />
          <Route path="/actress" component={Actress} />
          <Route path="/films" component={Films} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
