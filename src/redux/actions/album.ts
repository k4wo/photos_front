import { Album } from "../../types/interfaces";
import { clearSelection } from "./selection";
import { DefaultThunkAction, AlbumAction } from "../../types/redux";
import { PENDINGS } from "../../constants/enums";
import { setPhotos, setPending, clearPending } from "../actions";
import types from "../types";

const URL = process.env.REACT_APP_API_URL;

const addAlbumsAction = (albums: Album[]): AlbumAction => ({
  type: types.SET_ALBUM,
  payload: albums
});

export const addSelectedToAlbum = (albumId: number): DefaultThunkAction => async (
  dispatch,
  getState
): Promise<void> => {
  const { selection } = getState();
  const files = Object.values(selection);

  try {
    await fetch(`${URL}/album/${albumId}/files`, {
      method: "PUT",
      body: JSON.stringify({ files })
    });

    dispatch(clearSelection());
  } catch (error) {
    console.log(error);
  }
};
export const addFilesToAlbum = (albumId: number, files: number[]): DefaultThunkAction => async (
  dispatch
): Promise<void> => {
  try {
    await fetch(`${URL}/album/${albumId}/files`, {
      method: "PUT",
      body: JSON.stringify({ files })
    });

    dispatch(clearSelection());
  } catch (error) {
    console.log(error);
  }
};

export const removeFromAlbum = (albumId: string, file: number): DefaultThunkAction => async (
  dispatch,
  getState
): Promise<void> => {
  try {
    await fetch(`${URL}/album/${albumId}/file`, {
      method: "DELETE",
      body: JSON.stringify({ file })
    });

    const { photos } = getState();
    dispatch(setPhotos(photos.filter(photo => photo.id !== file)));
  } catch (error) {
    console.log(error);
  }
};

export const deleteFileAlbum = (fileId: number): DefaultThunkAction => async (
  dispatch,
  getState
): Promise<void> => {
  try {
    await fetch(`${URL}/files/delete`, {
      method: "DELETE",
      body: JSON.stringify({ id: [fileId] })
    });

    const { photos } = getState();
    dispatch(setPhotos(photos.filter(photo => photo.id !== fileId)));
  } catch (error) {
    console.log(error);
  }
};

export const setAlbumCover = (file: number, albumId: string): DefaultThunkAction => async (
  dispatch,
  getState
): Promise<void> => {
  try {
    const state = getState();
    const resp = await fetch(`${URL}/album/${albumId}/cover`, {
      method: "PUT",
      body: JSON.stringify({ file })
    });
    const cover = await resp.json();
    const id = parseInt(albumId, 10);

    const albums = state.albums.map((album: Album) =>
      album.id === id ? { ...album, cover } : album
    );
    dispatch(addAlbumsAction(albums));
  } catch (error) {
    console.log(error);
  }
};

export const createAlbum = (name: string): DefaultThunkAction => async (
  dispatch,
  getState
): Promise<void> => {
  dispatch(setPending(PENDINGS.createAlbum));

  try {
    const response = await fetch(`${URL}/albums`, {
      method: "POST",
      body: JSON.stringify({ name })
    });
    const album: Album = await response.json();

    const state = getState();
    dispatch(addAlbumsAction([...state.albums, album]));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(clearPending());
  }
};

export const fetchAlbums = (): DefaultThunkAction => async (dispatch): Promise<void> => {
  dispatch(setPending(PENDINGS.fetchAlbums));

  try {
    const response = await fetch(`${URL}/albums`);
    const albums: Album[] = await response.json();

    dispatch(addAlbumsAction(albums));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(clearPending());
  }
};

export const deleteAlbum = (albumId: number): DefaultThunkAction => async (
  dispatch,
  getState
): Promise<void> => {
  try {
    await fetch(`${URL}/album/${albumId}`, {
      method: "DELETE"
    });

    const state = getState();
    dispatch(addAlbumsAction(state.albums.filter(album => album.id !== albumId)));
  } catch (error) {
    console.log(error);
  }
};
