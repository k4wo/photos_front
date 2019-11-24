import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage as imageIcon } from "@fortawesome/free-solid-svg-icons/faImage";
import { faTh as albumIcon } from "@fortawesome/free-solid-svg-icons/faTh";

const LABELS = {
  images: "images",
  albums: "albums"
};

const Navbar: React.FunctionComponent = () => {
  return (
    <div className="navbar">
      <a className="navbar__link" href="/">
        <FontAwesomeIcon icon={imageIcon} size="lg" />
        <div>{LABELS.images}</div>
      </a>
      <a className="navbar__link" href="/">
        <FontAwesomeIcon icon={albumIcon} size="lg" />
        <div>{LABELS.albums}</div>
      </a>
    </div>
  );
};

export default Navbar;
