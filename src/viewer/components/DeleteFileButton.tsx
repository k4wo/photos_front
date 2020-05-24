import React from "react";
import { useDispatch } from "react-redux";

import { deleteFileAlbum } from "../../redux/actions/album";

import Button from "../../components/buttons/Button";

interface Props {
  onRemoveFile: () => void;
  fileId: number;
}

const LABELS = {
  delete: "Delete"
};

const DeleteFileButton: React.FC<Props> = ({ onRemoveFile, fileId }) => {
  const dispatch = useDispatch();

  return (
    <Button
      handleClick={async (): Promise<void> => {
        await dispatch(deleteFileAlbum(fileId));
        onRemoveFile();
      }}
      classname="btn--simple"
    >
      {LABELS.delete}
    </Button>
  );
};

export default DeleteFileButton;
