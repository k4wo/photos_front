import React, { ReactNode } from "react";

import Modal from "./Modal";
import * as Buttons from "../buttons/Buttons";

import "./modals.css";

interface Props {
  title: string;
  onSave: () => void;
  onClose: () => void;
  children: ReactNode;
  isPending: boolean;
}

const LABELS = {
  close: "close",
  save: "save"
};

const ActionModal: React.FC<Props> = ({ title, onSave, onClose, children, isPending }) => {
  return (
    <Modal onClose={onClose}>
      <div className="action-modal__title">{title}</div>
      <div className="action-modal__content">{children}</div>
      <div className="action-modal__buttons">
        <Buttons.Primary handleClick={onClose} disabled={isPending}>
          {LABELS.close}
        </Buttons.Primary>
        <Buttons.Primary handleClick={onSave} disabled={isPending} isPending={isPending}>
          {LABELS.save}
        </Buttons.Primary>
      </div>
    </Modal>
  );
};

export default ActionModal;
