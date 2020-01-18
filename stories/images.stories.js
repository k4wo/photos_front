import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import withRouter from "storybook-react-router";

import ImageComponent from "../src/components/images/Image";
import AlbumComponent from "../src/components/images/Album";

export default { title: "Images", decorators: [withKnobs, withRouter()] };

const url = "https://i.imgur.com/xLzPFj3.jpg";

export const Image: React.FunctionComponent = () => (
  <ImageComponent
    isSelected={boolean("Is selected", true)}
    url={text("Image URL", url)}
    width={number("Image width", 344)}
    height={number("Image height", 167)}
  />
);

export const Album: React.FunctionComponent = () => (
  <AlbumComponent
    url={text("Album URL", url)}
    coverUrl={text("Cover URL", url)}
    name={text("Album name", "album name")}
  />
);
