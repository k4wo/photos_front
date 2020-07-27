import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import format from "date-fns/format";
import React from "react";

import { ButtonIcon } from "../../components/buttons";
import { Photo } from "../../types/interfaces";

import "./fileInfo.css";

interface Props {
  onClose: () => void;
  file: Photo;
}

const LABELS = {
  info: "Information",
  details: "details"
};

const FileInfo: React.FC<Props> = ({ onClose, file }) => {
  const date = new Date(file.date);

  return (
    <div className="file-info">
      <div className="file-info__header">
        <span>{LABELS.info}</span>
        <ButtonIcon icon="times" handleClick={onClose} />
      </div>

      <div className="file-info__details">
        <div className="file-info__label">{LABELS.details}</div>

        <div className="file-info__box">
          <div className="file-info__icon">
            <FontAwesomeIcon icon="calendar-day" size="lg" />
          </div>
          <div className="file-info__text">
            <div>{format(date, "d MMMM y")}</div>
            <div>
              <span className="file-info__small-text">
                {format(date, "EEEE")}, {format(date, "	HH:mm")}
              </span>
              <span className="file-info__small-text">{format(date, "OOOO")}</span>
            </div>
          </div>
        </div>

        <div className="file-info__box">
          <div className="file-info__icon">
            <FontAwesomeIcon icon="image" size="lg" />
          </div>
          <div className="file-info__text">
            <div>{file.name}</div>
            <div>
              <span className="file-info__small-text">
                {file.width}×{file.height}
              </span>
              <span className="file-info__small-text">{file.size} MB</span>
            </div>
          </div>
        </div>

        <div className="file-info__box">
          <div className="file-info__icon">
            <FontAwesomeIcon icon="camera" size="lg" />
          </div>
          <div className="file-info__text">
            <div>{file.camera}</div>
            <div>
              <span className="file-info__small-text">{file.exposureTime}</span>
              <span className="file-info__small-text">{file.fNumber}</span>
              <span className="file-info__small-text">{file.focalLength}</span>
              <span className="file-info__small-text">ISO{file.iso}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileInfo;
