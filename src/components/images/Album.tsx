import React, { useState, useRef } from "react";
import cn from "classnames";
import { faEllipsisV as menuIcon } from "@fortawesome/free-solid-svg-icons/faEllipsisV";

import "./images.css";
import ButtonIcon from "../buttons/ButtonIcon";
import useOutsideClick from "../../helpers/useOutsideClick";

interface AlbumProps {
  url: string;
  name: string;
}

const Album: React.FunctionComponent<AlbumProps> = ({ url, name }) => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const albumMenuRef = useRef<HTMLDivElement>(null);

  const menuClass = cn("album__menu", isMenuActive && "album__menu--active");
  useOutsideClick((): void => setIsMenuActive(false), albumMenuRef);

  return (
    <div className="album">
      <div className="album__cover" style={{ backgroundImage: `url(${url})` }}>
        <div ref={albumMenuRef} className={menuClass}>
          <ButtonIcon
            icon={menuIcon}
            handleClick={(): void => setIsMenuActive(!isMenuActive)}
          />
        </div>
      </div>
      <div className="album__info">{name}</div>
    </div>
  );
};

export default Album;
