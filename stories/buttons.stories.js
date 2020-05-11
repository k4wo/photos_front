import { action } from "@storybook/addon-actions";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withKnobs, text } from "@storybook/addon-knobs";
import React from "react";

import ButtonComponent from "../src/components/buttons/Button";
import ButtonIconComponent from "../src/components/buttons/ButtonIcon";
import ButtonIconDropdown from "../src/components/buttons/ButtonIconDropdown";
import * as Buttons from "../src/components/buttons/Buttons";

export default { title: "Buttons", decorators: [withKnobs] };

export const Button: React.FunctionComponent = () => (
  <ButtonComponent>
    <FontAwesomeIcon icon={faPlus} size="xs" /> Add
  </ButtonComponent>
);

export const ButtonIcon: React.FunctionComponent = () => (
  <ButtonIconComponent icon={faAddressCard} />
);

export const ButtonPrimary: React.FunctionComponent = () => (
  <Buttons.Primary>
    <FontAwesomeIcon icon={faPlus} size="xs" /> {text("ButtonPrimary", "Create")}
  </Buttons.Primary>
);

export const ButtonDropdown: React.FC = () => (
  <ButtonIconDropdown icon={faPlus}>
    <ButtonComponent
      handleClick={(): void => action("ButtonDropdown-Click!")}
      classname="btn--simple"
    >
      {text("ButtonDropdown", "Click!")}
    </ButtonComponent>
    <ButtonComponent
      handleClick={(): void => action("ButtonDropdown-Click!")}
      classname="btn--simple"
    >
      {text("ButtonDropdown2", "Click 2!")}
    </ButtonComponent>
  </ButtonIconDropdown>
);
