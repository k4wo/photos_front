import React from "react";
import { useLocation } from "react-router-dom";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

const LABELS = {
  images: "images",
  albums: "albums"
};

interface NavbarProps {
  isSelectionActive: boolean;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ isSelectionActive }) => {
  const { pathname } = useLocation();
  const isActive = (path: string): string => (pathname === path ? "navbar__link--active" : "");

  return (
    <div className="navbar">
      {!isSelectionActive && (
        <>
          <a className={cn("navbar__link", isActive("/"))} href="/">
            <FontAwesomeIcon icon="image" size="lg" />
            <div className="navbar__text">{LABELS.images}</div>
          </a>
          <a className={cn("navbar__link", isActive("/album"))} href="/album">
            <FontAwesomeIcon icon="th" size="lg" />
            <div className="navbar__text">{LABELS.albums}</div>
          </a>
        </>
      )}
    </div>
  );
};

export default Navbar;
