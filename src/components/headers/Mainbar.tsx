import React, { ChangeEvent, useState, useRef } from "react";
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

interface MainbarProps {
  onFileSelect: (files: FileList) => void;
}

const Mainbar: React.FunctionComponent<MainbarProps> = ({ onFileSelect }: MainbarProps) => {
  const inputFile = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [isCreateModalActive, setIsCreateModalActive] = useState(false);

  return (
    <div className="mainbar">
      <div className="mainbar__menu">
        <FontAwesomeIcon icon={menuIcon} size="lg" />
      </div>
      <Search
        onSearch={(e: ChangeEvent<HTMLInputElement>): void => setSearch(e.target.value)}
        value={search}
      />
      <span className="mainbar__buttons">
        <Button handleClick={(): void => setIsCreateModalActive(false)}>
          <FontAwesomeIcon icon={createIcon} />
          {LABELS.create}
        </Button>
        <Button handleClick={(): void => inputFile.current?.click()}>
          <FontAwesomeIcon icon={uploadIcon} />
          {LABELS.upload}
          <input
            ref={inputFile}
            className="mainbar__input-file"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e: ChangeEvent<HTMLInputElement>): void => {
              if (e.target.files) {
                onFileSelect(e.target.files);
              }
            }}
            multiple
          />
        </Button>
      </span>
    </div>
  );
};

export default Mainbar;
