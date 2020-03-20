import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ReduxState, UploadReducer, SelectionReducer } from "./types/redux";
import { uploadFile, DefaultThunkAction } from "./redux/actions";

import Selectionbar from "./components/headers/Selectionbar";
import Mainbar from "./components/headers/Mainbar";
import Navbar from "./components/headers/Navbar";
import UploadWindow from "./components/uploads/UploadWindow";

import AlbumContent from "./album/AlbumContent";
import AlbumList from "./album/AlbumList";
import Viewer from "./viewer";
import Photos from "./photos";

interface WSProps {
  selectionCount: number;
  children: ReactNode;
}

const WithSidebar: React.FunctionComponent<WSProps> = ({ selectionCount, children }) => {
  const dispatch = useDispatch();
  const isSelectionActive = !!selectionCount;

  return (
    <>
      {!isSelectionActive && (
        <Mainbar
          onFileSelect={(files: FileList): DefaultThunkAction => dispatch(uploadFile(files))}
        />
      )}
      {isSelectionActive && <Selectionbar count={selectionCount} />}
      <Navbar isSelectionActive={isSelectionActive} />

      {children}
    </>
  );
};

const App: React.FunctionComponent = () => {
  const upload = useSelector((state: ReduxState): UploadReducer[] => state.upload);
  const selectedPhotos = useSelector<ReduxState, SelectionReducer>(state => state.selection);
  const selectionCount = Object.keys(selectedPhotos).length;
  const isSelectionActive = !!selectionCount;

  return (
    <Router>
      <Route exact path="/">
        <WithSidebar selectionCount={selectionCount}>
          <Photos selectedPhotos={selectedPhotos} isSelectionActive={isSelectionActive} />
        </WithSidebar>
      </Route>

      <Route exact path="/album">
        <WithSidebar selectionCount={selectionCount}>
          <AlbumList />
        </WithSidebar>
      </Route>

      <Route exact path="/album/:name">
        <WithSidebar selectionCount={selectionCount}>
          <AlbumContent selectedPhotos={selectedPhotos} isSelectionActive={isSelectionActive} />
        </WithSidebar>
      </Route>

      <Route exact path={["/p/:photoId", "/a/:album/:photoId"]}>
        <Viewer />
      </Route>

      {!!upload.length && <UploadWindow files={upload} />}
    </Router>
  );
};

export default App;
