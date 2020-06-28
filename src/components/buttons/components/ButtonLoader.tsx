import React, { ReactNode } from "react";
import cn from "classnames";

import Loader from "../../loaders/Roller";

export interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isPending: boolean;
}

interface InternalButtonProps extends ButtonProps {
  classname: string;
}

const ButtonIcon: React.FunctionComponent<InternalButtonProps> = ({
  children,
  handleClick,
  classname,
  disabled,
  isPending
}: InternalButtonProps) => (
  <button onClick={handleClick} className={cn("btn btn--loader", classname)} disabled={disabled}>
    {children}
    <div className={cn("loader", isPending && "loader--visible")}>{isPending && <Loader />}</div>
  </button>
);

export default ButtonIcon;
