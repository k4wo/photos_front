import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Album as IAlbum, Photo } from "../types/interfaces";
import { fetchAlbumContent, DefaultThunkAction, setViewer } from "../redux/actions";
import { ReduxState } from "../types/redux";

import Image from "../components/images/Image";

import "./album.css";

const URL = process.env.REACT_APP_API_URL;
const FILE_PATH = process.env.REACT_APP_FILE_PATH;

const AlbumContent: React.FunctionComponent = () => {
  const [selectedPhotos, setSelectedPhotos] = useState<Array<number>>([]);
  const dispatch = useDispatch();
  const { name } = useParams();
  const history = useHistory();
  const album = useSelector<ReduxState, IAlbum | undefined>(state =>
    state.albums.find(album => album.name === name)
  );
  const photos = useSelector<ReduxState, Photo[]>(state =>
    album ? state.albumContent[album.id] || [] : []
  );

  useEffect(() => {
    if (album && !photos.length) {
      dispatch(fetchAlbumContent(album.id));
    }
  }, []);

  if (!album) {
    history.replace("/404");
    return null;
  }

  const toggleSelection = (index: number): void => {
    if (selectedPhotos.includes(index)) {
      setSelectedPhotos(selectedPhotos.filter(item => item !== index));
    } else {
      setSelectedPhotos([...selectedPhotos, index]);
    }
  };

  return (
    <div id="main-content" className="photos">
      {photos.map((photo, index) => (
        <Image
          key={photo.hash}
          url={`${URL}/${FILE_PATH}/${photo.hash}_mobile`}
          onSelect={(): void => toggleSelection(index)}
          handleClick={(): void | DefaultThunkAction =>
            !!selectedPhotos.length ? toggleSelection(index) : dispatch(setViewer(index))
          }
          width={photo.width}
          height={photo.height}
          isSelected={selectedPhotos.includes(index)}
        />
      ))}
    </div>
  );
};

export default AlbumContent;
