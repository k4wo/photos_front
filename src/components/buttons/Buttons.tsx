import React, { ReactNode } from "react";
import cn from "classnames";

import Loader from "../loaders/Roller";
import Button from "./Button";

interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
  disabled?: boolean;
  isPending?: boolean;
}

export const Primary: React.FunctionComponent<ButtonProps> = ({
  children,
  handleClick,
  disabled,
  isPending
}) => (
  <Button classname="btn--primary" handleClick={handleClick} disabled={disabled}>
    {children}
    <div className={cn("loader", isPending && "loader--visible")}>{isPending && <Loader />}</div>
  </Button>
);
