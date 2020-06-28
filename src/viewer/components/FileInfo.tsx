import React from "react";

import { ButtonIcon } from "../../components/buttons";
import { Photo } from "../../types/interfaces";

interface Props {
  onClose: () => void;
  file: Photo;
}

const LABELS = {
  info: "Information"
};

const FileInfo: React.FC<Props> = ({ onClose, file }) => {
  return (
    <div className="file-info">
      <div>
        <ButtonIcon icon="times" handleClick={onClose} size="2x" />
        <span>{LABELS.info}</span>
      </div>
    </div>
  );
};

export default FileInfo;
