import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";

import "./album.css";
import { deleteAlbum } from "../redux/actions/album";

import { PrimaryButton } from "../components/buttons";
import ButtonIconDropdown from "../components/dropdown/DropdownIcon";

interface AlbumProps {
  id: number;
  url: string;
  name: string;
  coverUrl?: string;
}

const LABELS = {
  deleteAlbum: "Delete album"
};

const Album: React.FC<AlbumProps> = ({ id, url, name, coverUrl }) => {
  const dispatch = useDispatch();

  return (
    <Link to={url} className="album">
      <div className="album__cover" style={{ backgroundImage: `url(${coverUrl})` }}>
        <ButtonIconDropdown icon="ellipsis-v">
          <PrimaryButton
            handleClick={(): void => {
              dispatch(deleteAlbum(id));
            }}
          >
            {LABELS.deleteAlbum}
          </PrimaryButton>
        </ButtonIconDropdown>
      </div>
      <div className="album__info">{name}</div>
    </Link>
  );
};

Album.defaultProps = {
  coverUrl: ""
};

export default Album;
