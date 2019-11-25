import React from "react";

import UploadWindowComponent from "../components/uploads/UploadWindow";

export default { title: "Uploads" };

const random = (max: number): number => Math.round(Math.random() * max);
const bool = (): boolean => !!random(1);
const str = (max): string =>
  [...Array(10)].map(() => random(max).toString(36)).join("");
const create = (): void => {
  const isLoading: boolean = bool();
  return {
    name: str(500),
    isLoading,
    isComplete: isLoading ? false : bool()
  };
};

export const UploadWindow: React.FunctionComponent = () => (
  <UploadWindowComponent
    files={Array(random(100))
      .fill(0)
      .map(() => create())}
  />
);
