import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./styles.css";
import { clearSelection, deleteFiles } from "../../redux/actions/selection";
import { BasicReduxAction, DefaultThunkAction } from "../../types/redux";

import ButtonIcon from "../buttons/ButtonIcon";
import LoadingModal from "../modals/LoadingModal";
import Button from "../buttons/Button";
import { addSelectedToAlbum } from "../../redux/actions/album";

interface SelectionbarProps {
  count: number;
}

const LABEL = {
  selected: "Selected",
  image: "image",
  images: "images",
  addToAlbum: "Add to Album"
};

const URL = process.env.REACT_APP_API_URL;

const Selectionbar: React.FunctionComponent<SelectionbarProps> = ({ count }) => {
  const [isAddToAlbumEnabled, setIsAddToAlbumEnabled] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="mainbar selectionbar">
      <ButtonIcon
        icon="times"
        handleClick={(): BasicReduxAction => dispatch(clearSelection())}
        size="2x"
      />
      <span>
        {LABEL.selected} {count} {`${count === 1 ? LABEL.image : LABEL.images}`}
      </span>
      <div className="buttons-actions">
        <ButtonIcon icon="plus" handleClick={(): void => setIsAddToAlbumEnabled(true)} size="2x" />
        <ButtonIcon
          icon="trash-alt"
          handleClick={(): DefaultThunkAction => dispatch(deleteFiles())}
          size="2x"
        />
      </div>

      {isAddToAlbumEnabled && (
        <LoadingModal
          title={LABEL.addToAlbum}
          onClose={(): void => setIsAddToAlbumEnabled(false)}
          fetchData={(signal: AbortSignal): Promise<Response> => fetch(`${URL}/albums`, { signal })}
          className="display-add-to-album"
        >
          {(data): React.ReactNode =>
            data?.map(item => (
              <Button
                handleClick={(): DefaultThunkAction => dispatch(addSelectedToAlbum(item.id))}
                key={item.id}
              >
                {item.name}
              </Button>
            ))
          }
        </LoadingModal>
      )}
    </div>
  );
};

export default Selectionbar;
