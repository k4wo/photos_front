import React from "react";
import cn from "classnames";

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

const HEIGHT = 200;
const HEIGHT_SELECTED = 180;

const Image: React.FunctionComponent<ImageProps> = ({
  isSelected,
  onSelect,
  handleClick,
  url,
  width,
  height
}: ImageProps) => {
  const imageClass = cn("image_container", isSelected && "image_container--selected");
  const selectionClass = cn("image__selection", isSelected && "image__selection--selected");
  const defaultHeight = isSelected ? HEIGHT_SELECTED : HEIGHT;
  const containerWidth = !width || !height ? "" : computeWidth(width, height, HEIGHT);
  const imageWidth = !width || !height ? "" : computeWidth(width, height, defaultHeight);

  return (
    <div
      className={imageClass}
      onClick={handleClick}
      style={{
        width: `${containerWidth}px`
      }}
    >
      <div
        className="image"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: `${imageWidth}px ${defaultHeight}px`,
          width: `${imageWidth}px`,
          height: `${defaultHeight}px`
        }}
      />
      <div className={selectionClass}>
        <ButtonIcon
          icon={isSelected ? "check-circle" : ["far", "circle"]}
          handleClick={(e): void => {
            e.stopPropagation();
            onSelect();
          }}
        />
      </div>
    </div>
  );
};

Image.defaultProps = {
  url: ""
};

export default Image;
