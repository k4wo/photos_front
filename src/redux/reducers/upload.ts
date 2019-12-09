import { Reducer } from "redux";

import types from "../types";
import {
  BasicReduxAction,
  UploadState,
  UploadFileAction
} from "../../types/redux";

interface UploadActionWithIndex extends BasicReduxAction {
  payload: number;
}

const initialState: UploadState = { data: [] };

const upload: Reducer<UploadState, UploadFileAction> = (
  state: UploadState = initialState,
  action: UploadFileAction
): UploadState => {
  switch (action.type) {
    case types.SET_FILES_STATE:
      return { data: action.payload };

    case types.CLEAR_UPLOAD_FILES:
      return initialState;

    default:
      return state;
  }
};

export default upload;
