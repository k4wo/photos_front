import React, { KeyboardEvent, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as ArrowRightIcon } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faAngleLeft as ArrowLeftIcon } from "@fortawesome/free-solid-svg-icons/faAngleLeft";

import "./viewer.css";
import onEscapePress from "../helpers/onKeyPress";

import ReduxState, { ViewerAction } from "../types/redux";
import { setViewer, closeViewer } from "../redux/actions";

interface ViewerProps {
  photoIndex: number;
}
type SetViewerType = ThunkAction<void, ReduxState, null, ViewerAction>;

const URL = process.env.REACT_APP_API_URL;
const FILE_PATH = process.env.REACT_APP_FILE_PATH;

const Viewer: React.FunctionComponent<ViewerProps> = ({ photoIndex }) => {
  const photos = useSelector((state: ReduxState) => state.photos.data);
  const dispatch = useDispatch();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => boxRef.current?.focus());

  const photo = photos[photoIndex];
  const url = `${URL}/${FILE_PATH}/${photo.hash}_mobile`;
  const isBackwardActive = photoIndex > 0;
  const isForwardActive = photoIndex < photos.length - 1;

  return (
    <div
      ref={boxRef}
      tabIndex={0}
      className="viewer"
      onKeyDown={(e: KeyboardEvent): void => onEscapePress(e, () => dispatch(closeViewer))}
    >
      <div className="photo" style={{ backgroundImage: `url(${url})` }} />
      {isBackwardActive && (
        <div
          className="previous"
          onClick={(): SetViewerType => dispatch(setViewer(photoIndex - 1))}
        >
          <div className="arrow arrow_left">
            <FontAwesomeIcon icon={ArrowLeftIcon} size="2x" />
          </div>
        </div>
      )}
      {isForwardActive && (
        <div className="next" onClick={(): SetViewerType => dispatch(setViewer(photoIndex + 1))}>
          <div className="arrow arrow_right">
            <FontAwesomeIcon icon={ArrowRightIcon} size="2x" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Viewer;
