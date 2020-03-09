export interface Photo {
  id: number;
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

export interface Album {
  id: number;
  name: string;
  size: number;
  owner: number;
  cover?: string;
  updatedAt: string;
  createdAt: string;
}

export interface AlbumContentPayload {
  id: number;
  data: Photo[];
}
