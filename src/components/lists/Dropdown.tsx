import React, { ReactNode } from "react";

import "./lists.css";

interface Props {
  handleClick: () => void;
  children: ReactNode;
}

const Dropdown: React.FunctionComponent<Props> = ({ children, handleClick }) => (
  <div
    className="dropdown"
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
