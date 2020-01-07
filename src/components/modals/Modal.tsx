import React, { ReactNode } from "react";

import Portal from "../Portal";
import { onEscapePress } from "../../helpers/onKeyPress";

import "./modals.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ children, onClose }) => {
  return (
    <Portal>
      <div className="modal" tabIndex={0} onKeyUp={(e): void => onEscapePress(e, onClose)}>
        <div className="modal__window">{children}</div>
      </div>
    </Portal>
  );
};

export default Modal;
