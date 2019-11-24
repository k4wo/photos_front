import React, { ReactNode } from "react";

import "./style.css";

interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  handleClick
}: ButtonProps) => (
  <button onClick={handleClick} className="btn">
    {children}
  </button>
);

export default Button;
