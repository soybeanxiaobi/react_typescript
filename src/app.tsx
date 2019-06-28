import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home/index';
import Hooks from './pages/Hooks/index';

export default function App() {
  return (
    <Router>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/hooks" component={Hooks} />
    </Router>
  )
}