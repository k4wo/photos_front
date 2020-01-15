import React, { useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus as AddIcon } from "@fortawesome/free-solid-svg-icons/faPlus";

import InputText from "../components/Inputs/IText";
import { Primary } from "../components/buttons/Buttons";

import "./album.css";

const LABELS = {
  createAlbum: "Create Album",
  addPhotos: "Add photos",
  addAlbumName: "Album name"
};

const CreateAlbum: React.FunctionComponent = () => {
  const [albumName, setAlbumName] = useState<string>("");
  return (
    <div className="create_album">
      <div className="empty-album">
        <InputText
          placeholder={LABELS.addAlbumName}
          value={albumName}
          onType={(e: ChangeEvent<HTMLInputElement>): void => setAlbumName(e.target.value)}
        />
        <Primary handleClick={(): void => console.log("handleClick")} disabled={!albumName}>
          {LABELS.createAlbum}
        </Primary>
      </div>

      <div className="add-content">
        <FontAwesomeIcon icon={AddIcon} />
        {LABELS.addPhotos}
      </div>
    </div>
  );
};

export default CreateAlbum;
