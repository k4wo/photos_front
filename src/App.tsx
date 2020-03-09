import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ReduxState, UploadReducer, ViewerReducer, SelectionReducer } from "./types/redux";
import { uploadFile, DefaultThunkAction } from "./redux/actions";

import Selectionbar from "./components/headers/Selectionbar";
import Mainbar from "./components/headers/Mainbar";
import Navbar from "./components/headers/Navbar";
import UploadWindow from "./components/uploads/UploadWindow";

import AlbumContent from "./album/AlbumContent";
import AlbumList from "./album/AlbumList";
import Viewer from "./viewer";
import Photos from "./photos";

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const upload = useSelector((state: ReduxState): UploadReducer[] => state.upload);
  const openPhoto = useSelector((state: ReduxState): ViewerReducer => state.viewer);
  const selectedPhotos = useSelector<ReduxState, SelectionReducer>(state => state.selection);
  const selectionCount = Object.keys(selectedPhotos).length;
  const isSelectionActive = !!selectionCount;

  if (openPhoto !== null) {
    return <Viewer photoIndex={openPhoto} />;
  }

  return (
    <Router>
      {!isSelectionActive && (
        <Mainbar
          onFileSelect={(files: FileList): DefaultThunkAction => dispatch(uploadFile(files))}
        />
      )}
      {isSelectionActive && <Selectionbar count={selectionCount} />}
      <Navbar isSelectionActive={isSelectionActive} />

      <Switch>
        <Route exact path="/">
          <Photos selectedPhotos={selectedPhotos} isSelectionActive={isSelectionActive} />
        </Route>

        <Route exact path="/album">
          <AlbumList />
        </Route>

        <Route exact path="/album/:name">
          <AlbumContent selectedPhotos={selectedPhotos} isSelectionActive={isSelectionActive} />
        </Route>
      </Switch>

      {!!upload.length && <UploadWindow files={upload} />}
    </Router>
  );
};

export default App;
