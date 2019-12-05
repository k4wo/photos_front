import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPhotos } from "../redux/actions";
import { ReduxState, Photo as PhotoInterface } from "../constants/interfaces";

import "./photos.css";
import Image from "../components/images/Image";

const URL = process.env.REACT_APP_API_URL;
const FILE_PATH = process.env.REACT_APP_FILE_PATH;

const Photos: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const photos = useSelector<ReduxState, PhotoInterface[]>(
    state => state.photos.data
  );

  useEffect(() => {
    dispatch(fetchPhotos);
  }, []);

  return (
    <div id="main-content" className="photos">
      {photos.map(photo => (
        <Image
          key={photo.hash}
          url={`${URL}/${FILE_PATH}/${photo.hash}_mobile`}
          onSelect={() => {}}
          handleClick={() => {}}
          width={photo.width}
          height={photo.height}
        ></Image>
      ))}
    </div>
  );
};

export default Photos;
