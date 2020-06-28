import React from "react";

import Button, { ButtonProps } from "../components/Button";

const PrimaryOutline: React.FunctionComponent<ButtonProps> = ({
  children,
  ...props
}: ButtonProps) => (
  <Button classname="btn--primary-outline" {...props}>
    {children}
  </Button>
);

export default PrimaryOutline;
