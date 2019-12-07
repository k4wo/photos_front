import { Reducer } from "redux";

import types from "../types";
import {
  UploadReducer,
  BasicReduxAction,
  UploadState
} from "../../types/redux";

interface UploadAction extends BasicReduxAction {
  payload: UploadReducer;
}
interface UploadActionWithIndex extends BasicReduxAction {
  payload: number;
}

const initialState: UploadState = { files: [] };

const upload: Reducer<UploadState, UploadAction> = (
  state: UploadState = initialState,
  action: UploadAction | UploadActionWithIndex
): UploadState => {
  switch (action.type) {
    case types.SET_UPLOAD_FILES:
      return { files: [...state.files, action.payload as UploadReducer] };

    case types.START_UPLOADING_FILE:
      return {
        files: state.files.map((item: UploadReducer, index: number) => ({
          ...item,
          isPending: index === action.payload
        }))
      };

    case types.SET_IS_UPLOADED_FILE:
      return {
        files: state.files.map((item: UploadReducer, index: number) => ({
          ...item,
          isUploaded: index === action.payload,
          isPending: index === action.payload ? false : item.isPending
        }))
      };

    case types.CLEAR_UPLOAD_FILES:
      return initialState;

    default:
      return state;
  }
};

export default upload;
