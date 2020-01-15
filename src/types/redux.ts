import { Photo } from "./interfaces";

import { PENDINGS } from "../constants/enums";

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
export interface ViewerAction extends BasicReduxAction {
  payload: ViewerReducer;
}

// REDUCERS
export interface BasicReducer {
  isPending: boolean;
  error: null | string;
  data: Record<string, string | number>;
}
export interface UploadReducer {
  isPending: boolean;
  isCompleted: boolean;
  name: string;
}
export type PendingReducer = PENDINGS | null;
export type ViewerReducer = number | null;

// STATES
export interface PhotosState {
  isPending: boolean;
  error: null | string;
  data: Photo[];
}
export interface UploadState {
  data: UploadReducer[];
}

export interface ReduxState {
  albums: BasicReducer;
  photos: PhotosState;
  upload: UploadState;
  viewer: ViewerReducer;
  pending: PendingReducer;
}

export default ReduxState;
