import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { Photo, Album } from "./interfaces";
import { PENDINGS } from "../constants/enums";

export type DefaultThunkAction = ThunkAction<void, ReduxState, null, AnyAction>;
export type PendingReducer = PENDINGS | null;
export type ViewerReducer = number | null;
export type AlbumContentReducer = Photo[];
export type SelectionReducer = Record<number, number>;

// ACTIONS
export interface BasicReduxAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}
export interface UploadFileAction extends BasicReduxAction {
  payload: UploadReducer[];
}
export interface ViewerAction extends BasicReduxAction {
  payload: ViewerReducer;
}
export interface AlbumAction extends BasicReduxAction {
  payload: Album[];
}
export interface PhotoAction extends BasicReduxAction {
  payload: Photo[];
}
export interface AlbumContentAction extends BasicReduxAction {
  payload: Photo[];
}
export interface SelectionAction extends BasicReduxAction {
  payload: SelectionReducer;
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

export interface ReduxState {
  albums: Album[];
  photos: Photo[];
  upload: UploadReducer[];
  viewer: ViewerReducer;
  pending: PendingReducer;
  albumContent: AlbumContentReducer;
  selection: SelectionReducer;
}

export default ReduxState;
