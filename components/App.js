import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import NewEmergencyPlan from './forms/NewEmergencyPlan';
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/" component={Home} />
            <Route
              path="/create"
              render={props => <NewEmergencyPlan {...props} />}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
