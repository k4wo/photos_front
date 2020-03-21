import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import cn from "classnames";
import React, { useState, useRef, ReactNode } from "react";

import ButtonIcon from "./ButtonIcon";
import Dropdown from "../lists/Dropdown";
import useOutsideClick from "../../helpers/useOutsideClick";

interface Props {
  icon: IconProp;
  children: ReactNode;
  size?: SizeProp;
}

const ButtonIconDropdown: React.FC<Props> = ({ icon, size, children }) => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuClass = cn("btn__menu", isMenuActive && "btn__menu--active");
  useOutsideClick((): void => setIsMenuActive(false), menuRef);

  return (
    <div ref={menuRef} className={menuClass}>
      <ButtonIcon
        icon={icon}
        size={size}
        handleClick={(e): void => {
          e.preventDefault();
          setIsMenuActive(!isMenuActive);
        }}
      />

      {isMenuActive && (
        <Dropdown handleClick={(): void => setIsMenuActive(false)}>{children}</Dropdown>
      )}
    </div>
  );
};

export default ButtonIconDropdown;
