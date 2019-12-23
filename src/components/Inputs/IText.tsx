import React from "react";

import "./inputs.css";

type ITextProps = {
  placeholder?: string | undefined;
  value: string;
  onType: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const IText: React.FunctionComponent<ITextProps> = ({ value, placeholder, onType }) => (
  <div className="IText">
    <input type="text" value={value} placeholder={placeholder} onChange={onType} />
    <span className="IText__active-bar" />
  </div>
);

export default IText;
