import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

import "./style.css";

interface ButtonProps {
  icon: IconProp;
  handleClick: () => void;
  size?: SizeProp;
}

const ButtonIcon: React.FunctionComponent<ButtonProps> = ({
  icon,
  handleClick,
  size
}: ButtonProps) => (
  <button onClick={handleClick} className="btn-icon">
    <FontAwesomeIcon icon={icon} size={size} />
  </button>
);

ButtonIcon.defaultProps = {
  size: "lg"
};

export default ButtonIcon;
