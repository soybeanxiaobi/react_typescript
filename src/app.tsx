import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.scss";
// @ts-ignore
import { PageIndex, UseKeyPressFn } from './pages';
class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <PageIndex />
          {/* <UseKeyPressFn /> */}
        </div>
      </Router>
    );
  }
}

export default App;
