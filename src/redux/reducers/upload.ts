import { Reducer } from "redux";

import types from "../types";
import { UploadFileAction, UploadReducer } from "../../types/redux";

const upload: Reducer<UploadReducer[], UploadFileAction> = (
  state = [],
  action
): UploadReducer[] => {
  switch (action.type) {
    case types.SET_FILES_STATE:
      return action.payload;

    case types.CLEAR_UPLOAD_FILES:
      return [];

    default:
      return state;
  }
};

export default upload;
