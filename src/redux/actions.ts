import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import { Photo } from "../types/interfaces";
import { BasicReduxAction, ErrorActionType, ReduxState } from "../types/redux";
import types from "./types";

const URL = process.env.REACT_APP_API_URL;

interface SetPhotoActionType extends BasicReduxAction {
  payload: Photo[];
}

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
export const fetchPhotos = async (
  dispatch: ThunkDispatch<ReduxState, {}, AnyAction>
): Promise<void> => {
  dispatch(setPhotosPending());

  try {
    const response = await fetch(`${URL}/images`);
    const photos = await response.json();

    dispatch(setPhotos(photos));
  } catch (error) {
    console.log(error);
    dispatch(setPhotosError(error.message));
  }
};
