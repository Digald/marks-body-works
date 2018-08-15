import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from './Pages/LandingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path='/' component={LandingPage}/>
        </Switch>
      </Router>
    );
  }
}

 export default App;