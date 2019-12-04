import React from "react";
import { useSelector } from "react-redux";

import { ReduxState, Photo as PhotoInterface } from "../constants/interfaces";

const Photos = () => {
  const photos = useSelector<ReduxState, PhotoInterface[]>(
    state => state.photos.data
  );
  console.log(photos);
  return <div>fds</div>;
};

export default Photos;
