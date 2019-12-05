import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars as menuIcon } from "@fortawesome/free-solid-svg-icons/faBars";
import { faPlus as createIcon } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faUpload as uploadIcon } from "@fortawesome/free-solid-svg-icons/faUpload";

import Search from "../Inputs/Search";
import Button from "../buttons/Button";

import "./styles.css";

const LABELS = {
  create: "Create",
  upload: "Upload"
};

const Mainbar: React.FunctionComponent = () => {
  const [search, setSearch] = useState("");
  const [isCreateModalActive, setIsCreateModalActive] = useState(false);

  return (
    <div className="mainbar">
      <div className="mainbar__menu">
        <FontAwesomeIcon icon={menuIcon} size="lg" />
      </div>
      <Search
        onSearch={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setSearch(e.target.value)
        }
        value={search}
      />
      <span className="mainbar__buttons">
        <Button handleClick={(): void => setIsCreateModalActive(false)}>
          <FontAwesomeIcon icon={createIcon} />
          {LABELS.create}
        </Button>
        <Button handleClick={(): void => {}}>
          <FontAwesomeIcon icon={uploadIcon} />
          {LABELS.upload}
        </Button>
      </span>
    </div>
  );
};

export default Mainbar;
