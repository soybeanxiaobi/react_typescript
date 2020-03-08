import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.scss";

// @ts-ignore
import { PageIndex } from './pages';
class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <PageIndex />
        </div>
      </Router>
    );
  }
}

export default App;
