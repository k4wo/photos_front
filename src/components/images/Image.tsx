import React from "react";
import cn from "classnames";
import { faCircle as selectIcon } from "@fortawesome/free-regular-svg-icons/faCircle";
import { faCheckCircle as selectedIcon } from "@fortawesome/free-solid-svg-icons/faCheckCircle";

import "./images.css";
import ButtonIcon from "../buttons/ButtonIcon";

import { computeWidth } from "../../helpers/computeDimension";

interface ImageProps {
  url?: string;
  isSelected?: boolean;
  width?: number;
  height?: number;
  onSelect: () => void;
  handleClick: () => void;
}

const Image: React.FunctionComponent<ImageProps> = ({
  isSelected,
  onSelect,
  handleClick,
  url,
  width,
  height
}: ImageProps) => {
  const selectionClass = cn(
    "image__selection",
    isSelected && "image__selection--selected"
  );
  const w = !width || !height ? "" : computeWidth(width, height, 200);

  return (
    <div
      className="image"
      style={{ backgroundImage: `url(${url})`, width: w }}
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

Image.defaultProps = {
  url: ""
};

export default Image;
