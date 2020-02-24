import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import "zent/css/index.css";
// @ts-ignore
import Header from "./components/Header";
// @ts-ignore
import { UseStateFn, UseEffectFn, UseAsyncFn } from './pages/hooks';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Route path="/use-state" component={UseStateFn} />
            <Route path="/use-effect" component={UseEffectFn} />
            <Route path="/use-async" component={UseAsyncFn} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
