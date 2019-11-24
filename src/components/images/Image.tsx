import React from "react";
import cn from "classnames";
import { faCircle as selectIcon } from "@fortawesome/free-regular-svg-icons/faCircle";
import { faCheckCircle as selectedIcon } from "@fortawesome/free-solid-svg-icons/faCheckCircle";

import "./images.css";
import ButtonIcon from "../buttons/ButtonIcon";

interface ImageProps {
  url: string;
  isSelected: boolean;
  onSelect: () => void;
  handleClick: () => void;
}

const Image: React.FunctionComponent<ImageProps> = ({
  isSelected,
  onSelect,
  handleClick,
  url
}) => {
  const selectionClass = cn(
    "image__selection",
    isSelected && "image__selection--selected"
  );

  return (
    <div
      className="image"
      style={{ backgroundImage: `url(${url})` }}
      onClick={handleClick}
    >
      <div className={selectionClass}>
        <ButtonIcon
          icon={isSelected ? selectedIcon : selectIcon}
          handleClick={onSelect}
        />
      </div>
    </div>
  );
};

export default Image;
