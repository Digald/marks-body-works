import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import LandingPage from "./Pages/LandingPage";
import Powerbb from "./Pages/Powerbb";
import FiveThreeOne from "./Pages/FiveThreeOne";
import AboutPage from './Pages/AboutPage';

/* 
Acts as the router of the application.
*/

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/programs/powerbb" component={Powerbb} />
          <Route exact path="/programs/531" component={FiveThreeOne} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
