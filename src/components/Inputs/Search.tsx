import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./inputs.css";

type SearchProps = {
  placeholder?: string | undefined;
  value: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FunctionComponent<SearchProps> = ({ placeholder, value, onSearch }) => (
  <label className="search">
    <div className="search-icon">
      <FontAwesomeIcon icon="search" size="lg" />
    </div>
    <input type="text" value={value} onChange={onSearch} placeholder={placeholder} />
  </label>
);

Search.defaultProps = {
  placeholder: "Search"
};

export default Search;
