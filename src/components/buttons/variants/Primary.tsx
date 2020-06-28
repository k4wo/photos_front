import React from "react";

import Button, { ButtonProps } from "../components/Button";

const Primary: React.FunctionComponent<ButtonProps> = ({ children, ...props }: ButtonProps) => (
  <Button classname="btn--primary" {...props}>
    {children}
  </Button>
);

export default Primary;
