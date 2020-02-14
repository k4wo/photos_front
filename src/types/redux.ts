import { Photo, Album, AlbumContentPayload } from "./interfaces";
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
export interface AlbumContentAction extends BasicReduxAction {
  payload: AlbumContentPayload;
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
export type AlbumContentReducer = Record<number, Photo[]>;

export interface ReduxState {
  albums: Album[];
  photos: Photo[];
  upload: UploadReducer[];
  viewer: ViewerReducer;
  pending: PendingReducer;
  albumContent: AlbumContentReducer;
}

export default ReduxState;
