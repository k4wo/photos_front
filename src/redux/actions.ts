import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { Photo } from "../types/interfaces";
import {
  BasicReduxAction,
  ErrorActionType,
  ReduxState,
  UploadFileAction,
  UploadReducer,
  ViewerAction
} from "../types/redux";
import types from "./types";

const URL = process.env.REACT_APP_API_URL;

interface SetPhotoActionType extends BasicReduxAction {
  payload: Photo[];
}

export type DefaultThunkAction = ThunkAction<void, ReduxState, null, AnyAction>;
type DefaultDispatchAction = ThunkDispatch<ReduxState, {}, AnyAction>;

export const setPhotosPending = (): BasicReduxAction => ({
  type: types.FETCH_PHOTOS
});
export const setPhotosError = (error: string): ErrorActionType => ({
  type: types.FETCH_PHOTOS_ERROR,
  payload: error
});
export const setPhotos = (photos: Photo[]): SetPhotoActionType => ({
  type: types.FETCH_PHOTOS_SUCCESS,
  payload: photos
});
export const fetchPhotos = async (dispatch: DefaultDispatchAction): Promise<void> => {
  dispatch(setPhotosPending());

  try {
    const response = await fetch(`${URL}/images`);
    const photos = await response.json();

    dispatch(setPhotos(photos.sort((a: Photo, b: Photo) => +new Date(b.date) - +new Date(a.date))));
  } catch (error) {
    console.log(error);
    dispatch(setPhotosError(error.message));
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

export const setViewer = (
  photoIndex: number
): ThunkAction<void, ReduxState, null, ViewerAction> => (
  dispatch: DefaultDispatchAction
): ViewerAction => dispatch(setViewerAction(photoIndex));

export const closeViewer = (dispatch: DefaultDispatchAction): ViewerAction =>
  dispatch(setViewerAction(null));
