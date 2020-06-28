import React from "react";

import ButtonLoader, { ButtonProps } from "../components/ButtonLoader";

const PrimaryLoader: React.FunctionComponent<ButtonProps> = ({
  children,
  ...props
}: ButtonProps) => (
  <ButtonLoader classname="btn--primary" {...props}>
    {children}
  </ButtonLoader>
);

export default PrimaryLoader;
