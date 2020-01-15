import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPhotos, setViewer, DefaultThunkAction } from "../redux/actions";
import { ReduxState } from "../types/redux";
import { Photo as PhotoInterface } from "../types/interfaces";

import "./photos.css";
import Image from "../components/images/Image";

const URL = process.env.REACT_APP_API_URL;
const FILE_PATH = process.env.REACT_APP_FILE_PATH;

const Photos: React.FunctionComponent = () => {
  const [selectedPhotos, setSelectedPhotos] = useState<Array<number>>([]);
  const dispatch = useDispatch();
  const photos = useSelector<ReduxState, PhotoInterface[]>(state => state.photos);

  const toggleSelection = (index: number): void => {
    if (selectedPhotos.includes(index)) {
      setSelectedPhotos(selectedPhotos.filter(item => item !== index));
    } else {
      setSelectedPhotos([...selectedPhotos, index]);
    }
  };

  useEffect(() => {
    dispatch(fetchPhotos);
  }, [dispatch]);

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

export default Photos;
