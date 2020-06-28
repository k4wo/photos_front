import React, { ReactNode } from "react";
import cn from "classnames";

export interface ButtonProps {
  children: ReactNode;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

interface InternalButtonProps extends ButtonProps {
  classname: string;
}

const Button: React.FunctionComponent<InternalButtonProps> = ({
  children,
  handleClick,
  classname,
  disabled
}: InternalButtonProps) => (
  <button onClick={handleClick} className={cn("btn", classname)} disabled={disabled}>
    {children}
  </button>
);

export default Button;
