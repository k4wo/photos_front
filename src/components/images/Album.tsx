import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { faEllipsisV as menuIcon } from "@fortawesome/free-solid-svg-icons/faEllipsisV";

import "./images.css";
import ButtonIcon from "../buttons/ButtonIcon";
import useOutsideClick from "../../helpers/useOutsideClick";

interface AlbumProps {
  url: string;
  name: string;
  coverUrl?: string;
}

const Album: React.FC<AlbumProps> = ({ url, name, coverUrl }) => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const albumMenuRef = useRef<HTMLDivElement>(null);

  const menuClass = cn("album__menu", isMenuActive && "album__menu--active");
  useOutsideClick((): void => setIsMenuActive(false), albumMenuRef);

  return (
    <Link to={url} className="album">
      <div className="album__cover" style={{ backgroundImage: `url(${coverUrl})` }}>
        <div ref={albumMenuRef} className={menuClass}>
          <ButtonIcon icon={menuIcon} handleClick={(): void => setIsMenuActive(!isMenuActive)} />
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
