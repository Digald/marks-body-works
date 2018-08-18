import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import LandingPage from "./Pages/LandingPage";
import Powerbb from "./Pages/Powerbb";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/programs/powerbb" component={Powerbb} />
          <Route exact path="/programs/531" />
        </Switch>
      </Router>
    );
  }
}

export default App;
