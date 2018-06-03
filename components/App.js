import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
