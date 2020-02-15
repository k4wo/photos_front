import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import DropdownComponent from "../src/components/lists/Dropdown";
import Button from "../src/components/buttons/Button";

export default { title: "Lists", decorators: [withKnobs] };

export const Dropdown: React.FunctionComponent = () => (
  <DropdownComponent>
    <div>{text("div", "menu item number 1")}</div>
    <Button handleClick={action("Dropdown item 3")} classname="btn--simple">
      {text("button", "menu item number 3")}
    </Button>
    <Button handleClick={action("Dropdown item 4")} classname="btn--simple">
      {text("button2", "menu item number 4")}
    </Button>
    <Button handleClick={action("Dropdown item 5")} classname="btn--simple">
      {text("button3", "menu item number 5")}
    </Button>
  </DropdownComponent>
);
