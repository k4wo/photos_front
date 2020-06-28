import React from "react";

import Button, { ButtonProps } from "../components/Button";

const Transparent: React.FunctionComponent<ButtonProps> = ({ children, ...props }: ButtonProps) => (
  <Button classname="btn--transparent" {...props}>
    {children}
  </Button>
);

export default Transparent;
