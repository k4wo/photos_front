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
  const [menuDirection, setMenuDirection] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);

  const menuClass = cn("btn__menu", isMenuActive && "btn__menu--active", menuDirection);
  useOutsideClick((): void => setIsMenuActive(false), menuRef);

  return (
    <div ref={menuRef} className={menuClass}>
      <ButtonIcon
        icon={icon}
        size={size}
        handleClick={(e): void => {
          e.preventDefault();
          const { innerWidth } = window;
          const positionX = menuRef?.current?.getBoundingClientRect()?.x || 0;

          setMenuDirection(innerWidth / 2 > positionX ? "dropdown--right" : "dropdown--left");
          setIsMenuActive(!isMenuActive);
        }}
      />

      <Dropdown isActive={isMenuActive} handleClick={(): void => setIsMenuActive(false)}>
        {children}
      </Dropdown>
    </div>
  );
};

export default ButtonIconDropdown;
