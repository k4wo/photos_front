import React, { ReactNode } from "react";
import Button from "./Button";

interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
}

export const Primary: React.FunctionComponent<ButtonProps> = ({ children, handleClick }) => (
  <Button classname="btn--primary" handleClick={handleClick}>
    {children}
  </Button>
);
