import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

import "./icon.css";

interface ButtonProps {
  icon: IconProp;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: SizeProp;
  isDisabled?: boolean;
}

const ButtonIcon: React.FunctionComponent<ButtonProps> = ({
  icon,
  isDisabled,
  handleClick,
  size
}: ButtonProps) => (
  <button onClick={handleClick} disabled={isDisabled} className="btn-icon">
    <FontAwesomeIcon icon={icon} size={size} />
  </button>
);

ButtonIcon.defaultProps = {
  size: "lg"
};

export default ButtonIcon;
