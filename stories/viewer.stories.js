import React from "react";
import { action } from "@storybook/addon-actions";

import Component from "../src/viewer/index";

export default { title: "Viewer" };

const panorama = "http://urbnews.pl/wp-content/uploads/2015/08/Panorama-Warszawy.jpg";
const image1 = "https://www.aquascapeinc.com/upload/Pondless-Kit-Beauty.jpg";

export const Viewer: React.FunctionComponent = () => (
  <Component
    url={image1}
    isForwardActive
    isBackwardActive
    onForward={action("onForward-click")}
    onBackward={action("onBackward-click")}
  />
);
export const Panorama: React.FunctionComponent = () => <Component url={panorama} />;
