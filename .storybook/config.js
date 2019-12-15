import { configure } from "@storybook/react";
import { addParameters } from "@storybook/react"; // <- or your storybook framework

import '../src/variables.css'

addParameters({
  backgrounds: [
    { name: "twitter", value: "#00aced", default: true },
    { name: "facebook", value: "#3b5998" }
  ]
});

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);
