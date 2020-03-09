import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPhotos, setViewer } from "../redux/actions";
import { Photo as PhotoInterface } from "../types/interfaces";
import { ReduxState, DefaultThunkAction, SelectionReducer } from "../types/redux";
import { toggleSelection } from "../redux/actions/selection";

import "./photos.css";
import Image from "../components/images/Image";

const URL = process.env.REACT_APP_API_URL;
const FILE_PATH = process.env.REACT_APP_FILE_PATH;

interface PhotosProps {
  selectedPhotos: SelectionReducer;
  isSelectionActive: boolean;
}

const Photos: React.FunctionComponent<PhotosProps> = ({ selectedPhotos, isSelectionActive }) => {
  const dispatch = useDispatch();
  const photos = useSelector<ReduxState, PhotoInterface[]>(state => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos);
  }, [dispatch]);

  return (
    <div id="main-content" className="photos">
      {photos.map((photo, index) => (
        <Image
          key={photo.hash}
          url={`${URL}/${FILE_PATH}/${photo.hash}_mobile`}
          onSelect={(): DefaultThunkAction => dispatch(toggleSelection(photo.id))}
          handleClick={(): void | DefaultThunkAction =>
            isSelectionActive ? dispatch(toggleSelection(photo.id)) : dispatch(setViewer(index))
          }
          width={photo.width}
          height={photo.height}
          isSelected={!!selectedPhotos[photo.id]}
        />
      ))}
    </div>
  );
};

export default Photos;
