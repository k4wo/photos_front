import React from "react";
import { useDispatch } from "react-redux";
import { faTimes as closeIcon } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faTrashAlt as removeIcon } from "@fortawesome/free-solid-svg-icons/faTrashAlt";

import "./styles.css";
import { clearSelection, deleteFiles } from "../../redux/actions/selection";
import { BasicReduxAction, DefaultThunkAction } from "../../types/redux";

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
        handleClick={(): DefaultThunkAction => dispatch(deleteFiles())}
        size="2x"
      />
    </div>
  );
};

export default Selectionbar;
