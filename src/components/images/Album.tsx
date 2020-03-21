import { faEllipsisV as menuIcon } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";

import "./images.css";
import { deleteAlbum } from "../../redux/actions";

import Button from "../buttons/Button";
import ButtonIconDropdown from "../buttons/ButtonIconDropdown";

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
        <ButtonIconDropdown icon={menuIcon}>
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
