import React, { KeyboardEvent, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useHistory } from "react-router-dom";

import "./viewer.css";
import onEscapePress from "../helpers/onKeyPress";
import ReduxState from "../types/redux";
import Topbar from "./Topbar";

const URL = process.env.REACT_APP_API_URL;
const FILE_PATH = process.env.REACT_APP_FILE_PATH;

interface RouterParams {
  album?: string;
  photoId: string;
}

const Viewer: React.FunctionComponent = () => {
  const params = useParams<RouterParams>();
  const history = useHistory();
  const photos = useSelector((state: ReduxState) => state.photos);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => boxRef.current?.focus());

  const fileId = parseInt(params.photoId, 10);
  const photoIndex = photos.findIndex(photo => photo.id === fileId);
  const photo = photos[photoIndex];
  if (!photo) {
    history.replace("/404");
    return null;
  }

  const url = `${URL}/${FILE_PATH}/${photo.hash}_mobile`;
  const isBackwardActive = photoIndex > 0;
  const isForwardActive = photoIndex < photos.length - 1;
  const baseUrl = params.album ? `/a/${params.album}` : "/p";
  const onClose = (): void => history.push(params.album ? `/album/${params.album}` : "/");
  const goBackward = (): void => history.push(`${baseUrl}/${photos[photoIndex - 1].id}`);
  const goForward = (): void => history.push(`${baseUrl}/${photos[photoIndex + 1].id}`);
  const onRemoveFile = (): void => {
    if (isForwardActive) {
      goForward();
    } else if (isBackwardActive) {
      goBackward();
    } else {
      onClose();
    }
  };

  return (
    <div
      ref={boxRef}
      tabIndex={0}
      className="viewer"
      onKeyDown={(e: KeyboardEvent): void => onEscapePress(e, onClose)}
    >
      <Topbar onClose={onClose} fileId={fileId} album={params.album} onRemoveFile={onRemoveFile} />
      <div className="photo" style={{ backgroundImage: `url(${url})` }} />
      {isBackwardActive && (
        <div className="previous" onClick={goBackward}>
          <div className="arrow arrow_left">
            <FontAwesomeIcon icon="angle-left" size="2x" />
          </div>
        </div>
      )}
      {isForwardActive && (
        <div className="next" onClick={goForward}>
          <div className="arrow arrow_right">
            <FontAwesomeIcon icon="angle-right" size="2x" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Viewer;
