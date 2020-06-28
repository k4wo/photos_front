import React, { ReactNode } from "react";

import Modal from "./Modal";
import Buttons from "../buttons";

import "./modals.css";

interface Props {
  title: string;
  onSave?: () => void;
  onClose: () => void;
  children: ReactNode;
  isPending: boolean;
}

const LABELS = {
  close: "Close",
  save: "Save"
};

const ActionModal: React.FC<Props> = ({ title, onSave, onClose, children, isPending }) => {
  return (
    <Modal onClose={onClose}>
      <div className="action-modal__title">{title}</div>
      <div className="action-modal__content">{children}</div>
      <div className="action-modal__buttons">
        <Buttons.PrimaryOutline handleClick={onClose} disabled={isPending}>
          {LABELS.close}
        </Buttons.PrimaryOutline>
        <Buttons.PrimaryLoader
          handleClick={(): void => onSave && onSave()}
          disabled={isPending || !onSave}
          isPending={isPending}
        >
          {LABELS.save}
        </Buttons.PrimaryLoader>
      </div>
    </Modal>
  );
};

export default ActionModal;
