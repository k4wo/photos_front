import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import SearchComponent from "../src/components/Inputs/Search";
import ITextComponent from "../src/components/Inputs/IText";

export default { title: "Inputs", decorators: [withKnobs] };

export const Search: React.FunctionComponent = () => (
  <SearchComponent
    onSearch={action("on-search")}
    placeholder={text("placeholder", "search something...")}
    value={text("value")}
  />
);

export const IText: React.FunctionComponent = () => (
  <ITextComponent
    onType={action("on-type")}
    placeholder={text("placeholder", "write something...")}
    value={text("value")}
  />
);
