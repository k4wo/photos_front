import { useDispatch } from "react-redux";
import React, { useState } from "react";

import { removeFromAlbum } from "../redux/actions/album";
import { setAlbumCover, addFilesToAlbum } from "../redux/actions/album";

import Buttons from "../components/buttons";
import ButtonIconDropdown from "../components/dropdown/DropdownIcon";
import DeleteFileButton from "./components/DeleteFileButton";
import LoadingModal from "../components/modals/LoadingModal";

interface Props {
  fileId: number;
  onClose: () => void;
  onRemoveFile: () => void;
  album?: string;
}

const LABELS = {
  setAlbumCover: "Set as album cover",
  removeFromAlbum: "Remove from the album",
  addToAlbum: "Add to Album"
};

const URL = process.env.REACT_APP_API_URL;

const Topbar: React.FC<Props> = ({ fileId, onClose, album, onRemoveFile }) => {
  const [isAddToAlbumEnabled, setIsAddToAlbumEnabled] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="topbar">
      <div>
        <Buttons.Icon icon="arrow-left" handleClick={onClose} size="2x" />
      </div>
      <div>
        {album && (
          <ButtonIconDropdown icon="ellipsis-v">
            <Buttons.SelectList
              handleClick={(): void => {
                dispatch(setAlbumCover(fileId, album));
              }}
            >
              {LABELS.setAlbumCover}
            </Buttons.SelectList>
            <DeleteFileButton fileId={fileId} onRemoveFile={onRemoveFile} />
            <Buttons.SelectList
              handleClick={async (): Promise<void> => {
                await dispatch(removeFromAlbum(album, fileId));
                onRemoveFile();
              }}
            >
              {LABELS.removeFromAlbum}
            </Buttons.SelectList>
          </ButtonIconDropdown>
        )}

        {!album && (
          <ButtonIconDropdown icon="ellipsis-v">
            <Buttons.SelectList handleClick={(): void => setIsAddToAlbumEnabled(true)}>
              {LABELS.addToAlbum}
            </Buttons.SelectList>
            <DeleteFileButton fileId={fileId} onRemoveFile={onRemoveFile} />
          </ButtonIconDropdown>
        )}
      </div>

      {isAddToAlbumEnabled && (
        <LoadingModal
          title={LABELS.addToAlbum}
          onClose={(): void => setIsAddToAlbumEnabled(false)}
          fetchData={(signal: AbortSignal): Promise<Response> => fetch(`${URL}/albums`, { signal })}
          className="display-add-to-album"
        >
          {(data): React.ReactNode =>
            data?.map(item => (
              <Buttons.SelectList
                handleClick={(): void => {
                  dispatch(addFilesToAlbum(item.id, [fileId]));
                  setIsAddToAlbumEnabled(false);
                }}
                key={item.id}
              >
                {item.name}
              </Buttons.SelectList>
            ))
          }
        </LoadingModal>
      )}
    </div>
  );
};

export default Topbar;
