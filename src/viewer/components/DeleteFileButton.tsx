import React from "react";
import { useDispatch } from "react-redux";

import { deleteFileAlbum } from "../../redux/actions/album";
import { SelectListButton } from "../../components/buttons";

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
    <SelectListButton
      handleClick={async (): Promise<void> => {
        await dispatch(deleteFileAlbum(fileId));
        onRemoveFile();
      }}
    >
      {LABELS.delete}
    </SelectListButton>
  );
};

export default DeleteFileButton;
