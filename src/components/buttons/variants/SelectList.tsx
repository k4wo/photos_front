import React from "react";

import Button, { ButtonProps } from "../components/Button";

const TransparentIcon: React.FunctionComponent<ButtonProps> = ({
  children,
  ...props
}: ButtonProps) => (
  <Button classname="btn--select-list" {...props}>
    {children}
  </Button>
);

export default TransparentIcon;
