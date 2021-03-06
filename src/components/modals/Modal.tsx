import React, { ReactNode, useEffect } from "react";

import { onEscapePress } from "../../helpers/onKeyPress";

import "./modals.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
  className?: string;
}

const Modal: React.FC<Props> = ({ children, onClose, className }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return (): void => {
      document.body.style.overflow = ""
    }
  }, [])
  
  return (
    <div
      className={`modal ${className}`}
      tabIndex={0}
      onKeyUp={(e): void => onEscapePress(e, onClose)}
      onClick={onClose}
    >
      <div className="modal__background"></div>
      <div className="modal__window" onClick={(e): void => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

Modal.defaultProps = {
  className: ""
};

export default Modal;
