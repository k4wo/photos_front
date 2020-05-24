import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { PENDINGS } from "../constants/enums";
import { Photo } from "../types/interfaces";
import {
  BasicReduxAction,
  PhotoAction,
  ReduxState,
  UploadFileAction,
  UploadReducer
} from "../types/redux";
import types from "./types";

const URL = process.env.REACT_APP_API_URL;

export type DefaultThunkAction = ThunkAction<void, ReduxState, null, AnyAction>;
type DefaultDispatchAction = ThunkDispatch<ReduxState, {}, AnyAction>;

// PENDINGS
export const setPending = (pending: PENDINGS | null): BasicReduxAction => ({
  type: types.SET_PENDING,
  payload: pending
});
export const clearPending = (): BasicReduxAction => setPending(null);

// PHOTOS
export const setPhotos = (photos: Photo[]): PhotoAction => ({
  type: types.ADD_PHOTOS,
  payload: photos
});
export const fetchPhotos = async (dispatch: DefaultDispatchAction): Promise<void> => {
  dispatch(setPending(PENDINGS.fetchPhotos));

  try {
    const response = await fetch(`${URL}/images`);
    const photos: Photo[] = await response.json();

    dispatch(setPhotos(photos.sort((a, b) => +new Date(b.date) - +new Date(a.date))));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(clearPending());
  }
};
export const fetchAlbumContent = (albumId: number): DefaultThunkAction => async (
  dispatch
): Promise<void> => {
  dispatch(setPending(PENDINGS.fetchAlbumContent));

  try {
    const response = await fetch(`${URL}/album/${albumId}`);
    const photos: Photo[] = await response.json();

    dispatch(setPhotos(photos || []));
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
  dispatch
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
