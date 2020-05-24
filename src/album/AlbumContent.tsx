import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Album as IAlbum, Photo } from "../types/interfaces";
import { fetchAlbumContent, DefaultThunkAction } from "../redux/actions";
import { ReduxState, SelectionReducer } from "../types/redux";
import { toggleSelection } from "../redux/actions/selection";

import Image from "../components/images/Image";

import "./album.css";

const URL = process.env.REACT_APP_API_URL;
const FILE_PATH = process.env.REACT_APP_FILE_PATH;

interface AlbumContentProps {
  selectedPhotos: SelectionReducer;
  isSelectionActive: boolean;
}

const AlbumContent: React.FunctionComponent<AlbumContentProps> = ({
  selectedPhotos,
  isSelectionActive
}) => {
  const dispatch = useDispatch();
  const { albumId: id = "" } = useParams();
  const history = useHistory();
  const albumId = parseInt(id, 10);
  const album = useSelector<ReduxState, IAlbum | undefined>(state =>
    state.albums.find(album => album.id === albumId)
  );
  const photos = useSelector<ReduxState, Photo[]>(state => state.photos) || [];

  useEffect(() => {
    if (album && !photos.length) {
      dispatch(fetchAlbumContent(album.id));
    }
  }, []);

  if (!album) {
    history.replace("/404");
    return null;
  }

  return (
    <div id="main-content" className="photos">
      {photos.map(photo => (
        <Image
          key={photo.hash}
          url={`${URL}/${FILE_PATH}/${photo.hash}_mobile`}
          onSelect={(): DefaultThunkAction => dispatch(toggleSelection(photo.id))}
          handleClick={(): void | DefaultThunkAction =>
            isSelectionActive
              ? dispatch(toggleSelection(photo.id))
              : history.push(`/a/${albumId}/${photo.id}`)
          }
          width={photo.width}
          height={photo.height}
          isSelected={!!selectedPhotos[photo.id]}
        />
      ))}
    </div>
  );
};

export default AlbumContent;
