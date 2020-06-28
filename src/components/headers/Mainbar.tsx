import React, { ChangeEvent, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Search from "../Inputs/Search";
import { TransparentIconButton } from "../buttons";
import CreateAlbum from "../../album/CreateAlbum";

import "./styles.css";

const LABELS = {
  create: "Create",
  upload: "Upload"
};

interface MainbarProps {
  onFileSelect: (files: FileList) => void;
}

const Mainbar: React.FunctionComponent<MainbarProps> = ({ onFileSelect }) => {
  const inputFile = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [isCreateAlbumActive, setIsCreateAlbumActive] = useState(false);

  return (
    <div className="mainbar">
      <div className="mainbar__menu">
        <FontAwesomeIcon icon="bars" size="lg" />
      </div>
      <Search
        onSearch={(e: ChangeEvent<HTMLInputElement>): void => setSearch(e.target.value)}
        value={search}
      />
      <span className="mainbar__buttons">
        <TransparentIconButton handleClick={(): void => setIsCreateAlbumActive(true)} icon="plus">
          {LABELS.create}
        </TransparentIconButton>
        <TransparentIconButton handleClick={(): void => inputFile.current?.click()} icon="upload">
          {LABELS.upload}
          <input
            accept="image/png, image/jpeg"
            className="mainbar__input-file"
            multiple
            onChange={(e: ChangeEvent<HTMLInputElement>): void => {
              if (e.target.files) {
                onFileSelect(e.target.files);
              }
            }}
            ref={inputFile}
            type="file"
          />
        </TransparentIconButton>
      </span>

      {isCreateAlbumActive && <CreateAlbum onClose={(): void => setIsCreateAlbumActive(false)} />}
    </div>
  );
};

export default Mainbar;
