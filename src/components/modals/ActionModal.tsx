import React, { ReactNode, useEffect } from "react";

import Modal from "./Modal";
import Buttons from "../buttons";

import "./modals.css";

interface Props {
  children: ReactNode;
  isDisabled?: boolean;
  isPending: boolean;
  onClose: () => void;
  onSave: () => void;
  title: string;
}

const LABELS = {
  close: "Close",
  save: "Save"
};

const ActionModal: React.FC<Props> = ({
  children,
  isDisabled,
  isPending,
  onClose,
  onSave,
  title,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <Modal onClose={onClose}>
      <div className="action-modal__title">
        {title}
        <div className="action-modal__close">
          <Buttons.Icon icon="times" handleClick={onClose} />
        </div>
      </div>
      <div className="action-modal__content">{children}</div>
      <div className="action-modal__buttons">
        <Buttons.PrimaryLoader
          handleClick={(): void => onSave()}
          disabled={isPending || isDisabled}
          isPending={isPending}
        >
          {LABELS.save}
        </Buttons.PrimaryLoader>
      </div>
    </Modal>
  );
};

export default ActionModal;
