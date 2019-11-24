import React from "react";

import ImageComponent from "../components/images/Image";
import AlbumComponent from "../components/images/Album";

export default { title: "Images" };

const url = "https://i.imgur.com/xLzPFj3.jpg";

export const NoImage: React.FunctionComponent = () => <ImageComponent />;
export const WithImage: React.FunctionComponent = () => (
  <ImageComponent url={url} />
);
export const SelectedImage: React.FunctionComponent = () => (
  <ImageComponent isSelected url={url} />
);

export const Album: React.FunctionComponent = () => (
  <AlbumComponent url={url} />
);
