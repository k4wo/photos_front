import React, { ReactNode } from "react";

import { onEscapePress } from "../../helpers/onKeyPress";

import "./modals.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ children, onClose }) => {
  return (
    <div className="modal" tabIndex={0} onKeyUp={(e): void => onEscapePress(e, onClose)}>
      <div className="modal__window">{children}</div>
    </div>
  );
};

export default Modal;
