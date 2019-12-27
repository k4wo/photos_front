import React, { ReactNode } from "react";
import cn from "classnames";

import "./style.css";

interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
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
