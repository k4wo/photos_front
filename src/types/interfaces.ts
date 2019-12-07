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
export interface File {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}