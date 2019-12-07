import { Photo, File } from "./interfaces";

// ACTIONS
export interface BasicReduxAction {
  type: string;
  payload?: any;
}
export interface ErrorActionType extends BasicReduxAction {
  payload: string;
}

// REDUCERS
export interface BasicReducer {
  isPending: boolean;
  error: null | string;
  data: Record<string, any>;
}

export interface UploadReducer {
  isPending?: boolean;
  isUploaded?: boolean;
  file: File;
}

// STATES
export interface PhotosState extends BasicReducer {
  data: Photo[];
}
export interface UploadState {
  files: UploadReducer[];
}

export interface ReduxState {
  albums: BasicReducer;
  photos: PhotosState;
  upload: UploadState;
}

export default ReduxState;
