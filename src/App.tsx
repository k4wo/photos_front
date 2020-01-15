import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ReduxState, UploadReducer, ViewerReducer } from "./types/redux";
import { uploadFile, DefaultThunkAction } from "./redux/actions";

import Mainbar from "./components/headers/Mainbar";
import Navbar from "./components/headers/Navbar";
import UploadWindow from "./components/uploads/UploadWindow";

import Viewer from "./viewer";
import Photos from "./photos";

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const upload = useSelector((state: ReduxState): UploadReducer[] => state.upload);
  const openPhoto = useSelector((state: ReduxState): ViewerReducer => state.viewer);

  if (openPhoto !== null) {
    return <Viewer photoIndex={openPhoto} />;
  }

  return (
    <Router>
      <Mainbar
        onFileSelect={(files: FileList): DefaultThunkAction => dispatch(uploadFile(files))}
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
