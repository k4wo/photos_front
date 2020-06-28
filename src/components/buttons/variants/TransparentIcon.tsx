import React from "react";

import ButtonIcon, { ButtonProps } from "../components/ButtonIcon";

const TransparentIcon: React.FunctionComponent<ButtonProps> = ({
  children,
  ...props
}: ButtonProps) => (
  <ButtonIcon classname="btn--transparent" {...props}>
    {children}
  </ButtonIcon>
);

export default TransparentIcon;
