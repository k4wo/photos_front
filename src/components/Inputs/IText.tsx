import React from "react";

import "./inputs.css";

type ITextProps = {
  placeholder?: string;
  value: string;
  onType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autofocus?: boolean;
};

const IText: React.FunctionComponent<ITextProps> = ({ value, placeholder, onType, autofocus }) => (
  <div className="IText">
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onType}
      autoFocus={autofocus}
    />
    <span className="IText__active-bar" />
  </div>
);

export default IText;
