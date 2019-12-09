import React, { useState } from "react";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize as minimizeIcon } from "@fortawesome/free-regular-svg-icons/faWindowMinimize";
import { faWindowMaximize as maximizeIcon } from "@fortawesome/free-regular-svg-icons/faWindowMaximize";
import { faCheckCircle as completedIcon } from "@fortawesome/free-solid-svg-icons/faCheckCircle";

import "./uploads.css";
import { UploadReducer } from "../../types/redux";
import ButtonIcon from "../buttons/ButtonIcon";
import Roller from "../loaders/Roller";

const UploadItem: React.FunctionComponent<UploadReducer> = ({
  name,
  isPending,
  isCompleted
}: UploadReducer) => (
  <div className="upload-window__item">
    <span>{name}</span>
    {isPending && <Roller />}
    {isCompleted && <FontAwesomeIcon icon={completedIcon} size="lg" />}
  </div>
);

interface UploadWindowProps {
  files: UploadReducer[];
}

const UploadWindow: React.FunctionComponent<UploadWindowProps> = ({
  files
}: UploadWindowProps) => {
  const [isUnfolded, setIsUnfolded] = useState<boolean>(true);

  const windowClass = cn("upload-window", isUnfolded && "upload-window--open");

  return (
    <div className={windowClass}>
      <div className="upload-window__title">
        Title
        <ButtonIcon
          icon={isUnfolded ? minimizeIcon : maximizeIcon}
          handleClick={(): void => setIsUnfolded(!isUnfolded)}
        />
      </div>
      <div className="upload-window__body">
        {files.map((item: UploadReducer, index: number) => (
          <UploadItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default UploadWindow;
