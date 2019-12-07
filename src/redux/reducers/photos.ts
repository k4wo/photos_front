import { Reducer } from "redux";

import types from "../types";
import { PhotosState, BasicReduxAction } from "../../types/redux";

const initialValues = {
  isPending: false,
  error: null,
  data: []
};

const photos: Reducer<PhotosState, BasicReduxAction> = (
  state: PhotosState = initialValues,
  action: BasicReduxAction
): PhotosState => {
  switch (action.type) {
    case types.FETCH_PHOTOS:
      return { ...state, isPending: true };

    case types.FETCH_PHOTOS_SUCCESS:
      return { error: null, isPending: false, data: action.payload };

    case types.FETCH_PHOTOS_ERROR:
      return { ...state, isPending: false, error: action.payload };

    default:
      return state;
  }
};

export default photos;
