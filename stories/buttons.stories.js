import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";

import ButtonComponent from "../src/components/buttons/Button";
import ButtonIconComponent from "../src/components/buttons/ButtonIcon";
import * as Buttons from "../src/components/buttons/Buttons";

export default { title: "Buttons" };

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
    <FontAwesomeIcon icon={faPlus} size="xs" /> Create
  </Buttons.Primary>
);
