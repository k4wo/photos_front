export interface BasicReducer {
  isPending: boolean;
  error: null | string;
  data: Record<string, any>;
}
export interface ReduxPhotoState extends BasicReducer {
  data: Photo[];
}
export interface BasicReduxAction {
  type: string;
  payload?: any;
}
export interface ErrorActionType extends BasicReduxAction {
  payload: string;
}
export interface ReduxState {
  albums: BasicReducer;
  photos: ReduxPhotoState;
}
export interface Photo {
  date: Date;
  width: number;
  height: number;
  fNumber: number;
  exposureTime: string;
  focalLength: number;
  iso: number;
  camera: string;
  model: string;
  orientation: number;
  longitude: number;
  latitude: number;
  name: string;
  hash: string;
  extension: string;
  mimeType: string;
  size: number;
  owner: number;
}
