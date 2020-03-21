import { faArrowLeft as goBackIcon } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faEllipsisV as menuIcon } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import { useDispatch } from "react-redux";
import React from "react";

import { setAlbumCover } from "../redux/actions";
import Button from "../components/buttons/Button";
import ButtonIcon from "../components/buttons/ButtonIcon";
import ButtonIconDropdown from "../components/buttons/ButtonIconDropdown";

interface Props {
  fileId: number;
  goBack: () => void;
  album?: string;
}

const LABELS = {
  setAlbumCover: "Set as album cover"
};

const Topbar: React.FC<Props> = ({ fileId, goBack, album }) => {
  const dispatch = useDispatch();

  return (
    <div className="topbar">
      <div>
        <ButtonIcon icon={goBackIcon} handleClick={goBack} size="2x" />
      </div>
      <div>
        {album && (
          <ButtonIconDropdown icon={menuIcon}>
            <Button
              handleClick={(): void => {
                dispatch(setAlbumCover(fileId, album));
              }}
              classname="btn--simple"
            >
              {LABELS.setAlbumCover}
            </Button>
          </ButtonIconDropdown>
        )}
      </div>
    </div>
  );
};

export default Topbar;
