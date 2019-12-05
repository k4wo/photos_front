import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Mainbar from "./components/headers/Mainbar";
import Navbar from "./components/headers/Navbar";

import Photos from "./photos";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Mainbar />
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
