import { configure } from "@storybook/react";
import { addParameters } from "@storybook/react"; // <- or your storybook framework

import "../src/variables.css";
import "../src/index.css";
import "./style.css";

addParameters({
  backgrounds: [
    { name: "white", value: "#fff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" }
  ]
});

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);
