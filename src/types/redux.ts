import { Photo, Album } from "./interfaces";
import { PENDINGS } from "../constants/enums";

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

export interface ReduxState {
  albums: Album[];
  photos: Photo[];
  upload: UploadReducer[];
  viewer: ViewerReducer;
  pending: PendingReducer;
}

export default ReduxState;
