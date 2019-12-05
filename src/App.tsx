import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Photos from "./photos";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <header>
        Edit <code>src/App.tsx</code> and save to reload.
      </header>

      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
