import React, { ReactNode } from "react";
import cn from "classnames";

import "./dropdown.css";

interface Props {
  handleClick: () => void;
  children: ReactNode;
  isActive: boolean;
}

const Dropdown: React.FunctionComponent<Props> = ({ children, handleClick, isActive }) => (
  <div
    className={cn("dropdown", isActive && "dropdown--active")}
    onClick={(e): void => {
      e.stopPropagation();
      e.preventDefault();
      handleClick();
    }}
  >
    {children}
  </div>
);

export default Dropdown;
