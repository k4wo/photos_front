import React, { useState } from "react";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize as minimizeIcon } from "@fortawesome/free-regular-svg-icons/faWindowMinimize";
import { faWindowMaximize as maximizeIcon } from "@fortawesome/free-regular-svg-icons/faWindowMaximize";
import { faCheckCircle as completedIcon } from "@fortawesome/free-solid-svg-icons/faCheckCircle";

import "./uploads.css";
import ButtonIcon from "../buttons/ButtonIcon";
import Roller from "../loaders/Roller";

interface ItemProps {
  name: string;
  isLoading: boolean;
  isComplete: boolean;
}

const UploadItem: React.FunctionComponent<ItemProps> = ({
  name,
  isLoading,
  isComplete
}: ItemProps) => (
  <div className="upload-window__item">
    <span>{name}</span>
    {isLoading && <Roller />}
    {isComplete && <FontAwesomeIcon icon={completedIcon} size="lg" />}
  </div>
);

interface UploadWindowProps {
  files: ItemProps[];
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
        {files.map((item: ItemProps, index: number) => (
          <UploadItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default UploadWindow;
