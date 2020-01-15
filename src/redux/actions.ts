import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { PENDINGS } from "../constants/enums";
import { Photo, Album } from "../types/interfaces";
import {
  BasicReduxAction,
  ReduxState,
  UploadFileAction,
  UploadReducer,
  ViewerAction,
  AlbumAction,
  PhotoAction
} from "../types/redux";
import types from "./types";

const URL = process.env.REACT_APP_API_URL;

export type DefaultThunkAction = ThunkAction<void, ReduxState, null, AnyAction>;
type DefaultDispatchAction = ThunkDispatch<ReduxState, {}, AnyAction>;

// PENDINGS
const setPendingAction = (pending: PENDINGS | null): BasicReduxAction => ({
  type: types.SET_PENDING,
  payload: pending
});
export const clearPending = (): BasicReduxAction => setPendingAction(null);

// PHOTOS
export const setPhotos = (photos: Photo[]): PhotoAction => ({
  type: types.ADD_PHOTOS,
  payload: photos
});
export const fetchPhotos = async (dispatch: DefaultDispatchAction): Promise<void> => {
  dispatch(setPendingAction(PENDINGS.fetchPhotos));

  try {
    const response = await fetch(`${URL}/images`);
    const photos = await response.json();

    dispatch(setPhotos(photos));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(clearPending());
  }
};

export const setUploadFiles = (files: UploadReducer[]): UploadFileAction => {
  return {
    type: types.SET_FILES_STATE,
    payload: files
  };
};

export const uploadFile = (files: FileList): DefaultThunkAction => async (
  dispatch: DefaultDispatchAction
): Promise<void> => {
  const filesName = Array.prototype.map.call(files, (file: File): string => file.name) as string[];
  const storeFiles = filesName.map(
    (name: string): UploadReducer => ({
      name,
      isPending: true,
      isCompleted: false
    })
  );
  const data = new FormData();
  [].forEach.call(files, file => data.append("files", file));

  dispatch(setUploadFiles(storeFiles));
  try {
    await fetch(`${URL}/upload`, {
      method: "POST",
      body: data
    });

    dispatch(
      setUploadFiles(
        storeFiles.map(item => ({
          ...item,
          isPending: false,
          isCompleted: true
        }))
      )
    );
  } catch (error) {
    // TODO: remove files from pending state
    console.log(error);
  }
};

// VIEWER
const setViewerAction = (index: number | null): ViewerAction => ({
  type: types.SET_VIEWER,
  payload: index
});

export const setViewer = (photoIndex: number): DefaultThunkAction => (
  dispatch: DefaultDispatchAction
): ViewerAction => dispatch(setViewerAction(photoIndex));

export const closeViewer = (dispatch: DefaultDispatchAction): ViewerAction =>
  dispatch(setViewerAction(null));

// ALBUMS
const addAlbumsAction = (albums: Album[]): AlbumAction => ({
  type: types.ADD_ALBUMS,
  payload: albums
});
export const createAlbum = (name: string): DefaultThunkAction => async (
  dispatch: DefaultDispatchAction
): Promise<void> => {
  dispatch(setPendingAction(PENDINGS.createAlbum));

  try {
    const response = await fetch(`${URL}/albums`, {
      method: "POST",
      body: JSON.stringify({ name })
    });
    const album: Album = await response.json();

    dispatch(addAlbumsAction([album]));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(clearPending());
  }
};
