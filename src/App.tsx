import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ReduxState, UploadReducer } from "./types/redux";
import { uploadFile } from "./redux/actions";

import Mainbar from "./components/headers/Mainbar";
import Navbar from "./components/headers/Navbar";
import UploadWindow from "./components/uploads/UploadWindow";

import Photos from "./photos";

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const upload = useSelector(
    (state: ReduxState): UploadReducer[] => state.upload.data
  );

  return (
    <Router>
      <Mainbar
        onFileSelect={(files: FileList): any => dispatch(uploadFile(files))}
      />
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
      </Switch>

      {!!upload.length && <UploadWindow files={upload} />}
    </Router>
  );
};

export default App;
