import React, { ReactNode } from "react";
import cn from "classnames";

import "./style.css";

interface ButtonProps {
  children: ReactNode;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  classname?: string;
  disabled?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  handleClick,
  classname,
  disabled
}: ButtonProps) => (
  <button onClick={handleClick} className={cn("btn", classname)} disabled={disabled}>
    {children}
  </button>
);

export default Button;
