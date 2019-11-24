import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch as searchIcon } from "@fortawesome/free-solid-svg-icons/faSearch";

import "./inputs.css";

type SearchProps = {
  placeholder?: string | undefined;
  value: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FunctionComponent<SearchProps> = ({
  placeholder,
  value,
  onSearch
}) => (
  <div className="search">
    <div className="search-icon">
      <FontAwesomeIcon icon={searchIcon} size="lg" />
    </div>
    <input
      type="text"
      value={value}
      onChange={onSearch}
      placeholder={placeholder}
    />
  </div>
);

Search.defaultProps = {
  placeholder: "Search"
};

export default Search;
