import React from "react";

import RollerComponent from "../src/components/loaders/Roller";
import LinearComponent from "../src/components/loaders/Linear";

export default { title: "Loaders" };

export const Roller: React.FunctionComponent = () => <RollerComponent />;
export const Linear: React.FunctionComponent = () => <LinearComponent />;
