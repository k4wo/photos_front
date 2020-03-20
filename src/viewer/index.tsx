import React, { KeyboardEvent, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as ArrowRightIcon } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faAngleLeft as ArrowLeftIcon } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { useParams, useHistory } from "react-router-dom";

import "./viewer.css";
import onEscapePress from "../helpers/onKeyPress";

import ReduxState from "../types/redux";

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

  const photoId = parseInt(params.photoId, 10);
  const photoIndex = photos.findIndex(photo => photo.id === photoId);
  const photo = photos[photoIndex];
  if (!photo) {
    history.replace("/404");
    return null;
  }

  const url = `${URL}/${FILE_PATH}/${photo.hash}_mobile`;
  const isBackwardActive = photoIndex > 0;
  const isForwardActive = photoIndex < photos.length - 1;
  const goBackUrl = params.album ? `/album/${params.album}` : "/";

  return (
    <div
      ref={boxRef}
      tabIndex={0}
      className="viewer"
      onKeyDown={(e: KeyboardEvent): void => onEscapePress(e, () => history.push(goBackUrl))}
    >
      <div className="photo" style={{ backgroundImage: `url(${url})` }} />
      {isBackwardActive && (
        <div
          className="previous"
          onClick={(): void => history.push(`/p/${photos[photoIndex - 1].id}`)}
        >
          <div className="arrow arrow_left">
            <FontAwesomeIcon icon={ArrowLeftIcon} size="2x" />
          </div>
        </div>
      )}
      {isForwardActive && (
        <div className="next" onClick={(): void => history.push(`/p/${photos[photoIndex + 1].id}`)}>
          <div className="arrow arrow_right">
            <FontAwesomeIcon icon={ArrowRightIcon} size="2x" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Viewer;
