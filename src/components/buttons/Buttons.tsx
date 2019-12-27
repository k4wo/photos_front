import React, { ReactNode } from "react";
import Button from "./Button";

interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
  disabled?: boolean;
}

export const Primary: React.FunctionComponent<ButtonProps> = ({
  children,
  handleClick,
  disabled
}) => (
  <Button classname="btn--primary" handleClick={handleClick} disabled={disabled}>
    {children}
  </Button>
);
