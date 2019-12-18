import { KeyboardEvent } from "react";

export const onEscapePress = (e: KeyboardEvent, action: (e: KeyboardEvent) => any): void => {
  if (e.key === "Escape") {
    action(e);
  }
};

export default onEscapePress;
