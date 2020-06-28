import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeProp, IconProp } from "@fortawesome/fontawesome-svg-core";
import cn from "classnames";

export interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon: IconProp;
  size?: SizeProp;
}

interface InternalButtonProps extends ButtonProps {
  classname: string;
}

const ButtonIcon: React.FunctionComponent<InternalButtonProps> = ({
  children,
  handleClick,
  classname,
  disabled,
  icon,
  size
}: InternalButtonProps) => (
  <button onClick={handleClick} className={cn("btn btn--icon", classname)} disabled={disabled}>
    <FontAwesomeIcon icon={icon} size={size} />
    {children}
  </button>
);

ButtonIcon.defaultProps = {
  size: "lg"
};

export default ButtonIcon;
