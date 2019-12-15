import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as ArrowRightIcon } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faAngleLeft as ArrowLeftIcon } from "@fortawesome/free-solid-svg-icons/faAngleLeft";

import "./viewer.css";

interface ViewerProps {
  url: string;
  onBackward: () => void;
  onForward: () => void;
  isForwardActive: boolean;
  isBackwardActive: boolean;
}

const Viewer: React.FunctionComponent<ViewerProps> = ({
  url,
  onBackward,
  onForward,
  isForwardActive,
  isBackwardActive
}) => (
  <div className="viewer">
    <div className="photo" style={{ backgroundImage: `url(${url})` }}></div>
    {isBackwardActive && (
      <div className="previous" onClick={onBackward}>
        <div className="arrow arrow_left">
          <FontAwesomeIcon icon={ArrowLeftIcon} size="2x" />
        </div>
      </div>
    )}
    {isForwardActive && (
      <div className="next" onClick={onForward}>
        <div className="arrow arrow_right">
          <FontAwesomeIcon icon={ArrowRightIcon} size="2x" />
        </div>
      </div>
    )}
  </div>
);

export default Viewer;
