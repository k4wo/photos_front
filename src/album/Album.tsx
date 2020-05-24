import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";

import "./album.css";
import { deleteAlbum } from "../redux/actions/album";

import Button from "../components/buttons/Button";
import ButtonIconDropdown from "../components/buttons/ButtonIconDropdown";

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
          <Button
            handleClick={(): void => {
              dispatch(deleteAlbum(id));
            }}
            classname="btn--simple"
          >
            {LABELS.deleteAlbum}
          </Button>
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
