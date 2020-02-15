import { faEllipsisV as menuIcon } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import cn from "classnames";
import React, { MouseEvent, useState, useRef } from "react";

import "./images.css";
import { deleteAlbum } from "../../redux/actions";
import useOutsideClick from "../../helpers/useOutsideClick";

import Button from "../buttons/Button";
import ButtonIcon from "../buttons/ButtonIcon";
import Dropdown from "../lists/Dropdown";

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
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const albumMenuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const menuClass = cn("album__menu", isMenuActive && "album__menu--active");
  useOutsideClick((): void => setIsMenuActive(false), albumMenuRef);

  return (
    <Link to={url} className="album">
      <div className="album__cover" style={{ backgroundImage: `url(${coverUrl})` }}>
        <div ref={albumMenuRef} className={menuClass}>
          <ButtonIcon
            icon={menuIcon}
            handleClick={(e: MouseEvent): void => {
              e.preventDefault();
              setIsMenuActive(!isMenuActive);
            }}
          />
          {isMenuActive && (
            <Dropdown>
              <Button
                handleClick={(e: MouseEvent): void => {
                  e.preventDefault();
                  dispatch(deleteAlbum(id));
                  setIsMenuActive(false);
                }}
                classname="btn--simple"
              >
                {LABELS.deleteAlbum}
              </Button>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="album__info">{name}</div>
    </Link>
  );
};

Album.defaultProps = {
  coverUrl: ""
};

export default Album;
