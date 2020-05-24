import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Album as IAlbum } from "../types/interfaces";
import { fetchAlbums } from "../redux/actions/album";
import { ReduxState } from "../types/redux";

import "./album.css";
import Album from "./Album";

const URL = process.env.REACT_APP_API_URL;
const FILE_PATH = process.env.REACT_APP_FILE_PATH;

const AlbumList: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const albums = useSelector<ReduxState, IAlbum[]>(state => state.albums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return (
    <div id="main-content" className="album-list">
      {albums.map(album => (
        <Album
          key={album.id}
          id={album.id}
          url={`/album/${album.id}`}
          name={album.name}
          coverUrl={`${URL}/${FILE_PATH}/${album.id}_mobile`}
        />
      ))}
    </div>
  );
};

export default AlbumList;
