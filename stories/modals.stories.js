import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import InputText from "../src/components/Inputs/IText";
import RawModal from "../src/components/modals/Modal";
import RawActionModal from "../src/components/modals/ActionModal";

export default { title: "Modals", decorators: [withKnobs] };

export const Modal: React.FunctionComponent = () => (
  <RawModal onClose={action("on-close")}>
    {text(
      "body",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    )}
  </RawModal>
);
export const ActionModal: React.FunctionComponent = () => (
  <RawActionModal
    title={text("title", "add album")}
    onSave={action("on-save")}
    onClose={action("on-close")}
    isPending={boolean("isPending", false)}
  >
    <InputText
      placeholder={text("placeholder", "write something")}
      value={text("value", "")}
      onType={(e: ChangeEvent<HTMLInputElement>): void => action(e.target.value)}
    />
  </RawActionModal>
);
