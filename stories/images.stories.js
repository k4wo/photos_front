import React from "react";

import ImageComponent from "../src/components/images/Image";
import AlbumComponent from "../src/components/images/Album";

export default { title: "Images" };

const url = "https://i.imgur.com/xLzPFj3.jpg";

export const NoImage: React.FunctionComponent = () => <ImageComponent />;
export const WithImage: React.FunctionComponent = () => (
  <ImageComponent url={url} width={344} height={167} />
);
export const SelectedImage: React.FunctionComponent = () => (
  <ImageComponent isSelected url={url} width={344} height={167} />
);

export const Album: React.FunctionComponent = () => (
  <AlbumComponent url={url} />
);
