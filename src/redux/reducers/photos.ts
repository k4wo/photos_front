import { Reducer } from "redux";

import types from "../types";
import { ReduxPhotoState, BasicReduxAction } from "../../constants/interfaces";

const initialValues = {
  isPending: false,
  error: null,
  data: []
};

const photos: Reducer<ReduxPhotoState, BasicReduxAction> = (
  state: ReduxPhotoState = initialValues,
  action: BasicReduxAction
): ReduxPhotoState => {
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
