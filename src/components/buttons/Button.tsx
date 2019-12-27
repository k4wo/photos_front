import React, { ReactNode } from "react";
import cn from "classnames";

import "./style.css";

interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
  classname?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  handleClick,
  classname
}: ButtonProps) => (
  <button onClick={handleClick} className={cn("btn", classname)}>
    {children}
  </button>
);

export default Button;
