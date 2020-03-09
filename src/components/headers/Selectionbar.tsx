import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { faTimes as closeIcon } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faTrashAlt as removeIcon } from "@fortawesome/free-solid-svg-icons/faTrashAlt";

import "./styles.css";
import { clearSelection, deleteFiles } from "../../redux/actions/selection";
import ReduxState, { BasicReduxAction, DefaultThunkAction } from "../../types/redux";
import { Album as IAlbum } from "../../types/interfaces";

import ButtonIcon from "../buttons/ButtonIcon";

interface SelectionbarProps {
  count: number;
}

const LABEL = {
  selected: "Selected",
  image: "image",
  images: "images"
};

const Selectionbar: React.FunctionComponent<SelectionbarProps> = ({ count }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const albums = useSelector<ReduxState, IAlbum[]>(state => state.albums);
  let album: IAlbum | undefined;

  if (location?.pathname.includes("album")) {
    const path = location?.pathname.split("/");
    const name = path[path.length - 1].trim();
    album = albums.find(album => album.name === name);
  }

  return (
    <div className="mainbar">
      <ButtonIcon
        icon={closeIcon}
        handleClick={(): BasicReduxAction => dispatch(clearSelection())}
        size="2x"
      />
      <span>
        {LABEL.selected} {count} {`${count === 1 ? LABEL.image : LABEL.images}`}
      </span>
      <ButtonIcon
        icon={removeIcon}
        handleClick={(): DefaultThunkAction => dispatch(deleteFiles(album?.id))}
        size="2x"
      />
    </div>
  );
};

export default Selectionbar;
