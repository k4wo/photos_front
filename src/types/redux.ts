import { Photo } from "./interfaces";

// ACTIONS
export interface BasicReduxAction {
  type: string;
  payload?: any;
}
export interface ErrorActionType extends BasicReduxAction {
  payload: string;
}
export interface UploadFileAction extends BasicReduxAction {
  payload: UploadReducer[];
}

// REDUCERS
export interface BasicReducer {
  isPending: boolean;
  error: null | string;
  data: Record<string, any>;
}
export interface UploadReducer {
  isPending: boolean;
  isCompleted: boolean;
  name: string;
}

// STATES
export interface PhotosState extends BasicReducer {
  data: Photo[];
}
export interface UploadState {
  data: UploadReducer[];
}

export interface ReduxState {
  albums: BasicReducer;
  photos: PhotosState;
  upload: UploadState;
}

export default ReduxState;
