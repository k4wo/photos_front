import React, { ChangeEvent, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Album } from "../types/interfaces";
import { createAlbum, DefaultThunkAction } from "../redux/actions";
import { PENDINGS } from "../constants/enums";
import ReduxState, { PendingReducer } from "../types/redux";

import ActionModal from "../components/modals/ActionModal";
import InputText from "../components/Inputs/IText";

const LABELS = {
  createAlbum: "Create Album",
  typeAlbumName: "Type album name"
};

interface Props {
  onClose: () => void;
}

const CreateAlbum: React.FC<Props> = ({ onClose }) => {
  const [albumName, setAlbumName] = useState("");
  const [isPending, setIsPending] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const [album] = useSelector((state: ReduxState): Album[] => state.albums);
  const currentPending = useSelector((state: ReduxState): PendingReducer => state.pending);

  useEffect(() => {
    if (isPending && currentPending === null && album) {
      onClose();
      history.push(`/album/${album.id}`);
    } else if (!isPending && currentPending === PENDINGS.createAlbum) {
      setIsPending(true);
    }
  }, [currentPending]);

  return (
    <ActionModal
      isPending={isPending}
      onClose={(): void => onClose()}
      onSave={(): DefaultThunkAction => dispatch(createAlbum(albumName))}
      title={LABELS.createAlbum}
    >
      <InputText
        autofocus
        onType={(e: ChangeEvent<HTMLInputElement>): void => setAlbumName(e.target.value)}
        placeholder={LABELS.typeAlbumName}
        value={albumName}
      />
    </ActionModal>
  );
};

export default CreateAlbum;
