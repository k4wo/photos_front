import React from "react";

import MHeader from "../src/components/headers/Mainbar";
import MHNavbar from "../src/components/headers/Navbar";

export default { title: "Headers" };

export const MainHeader: React.FunctionComponent = () => <MHeader />;
export const Navbar: React.FunctionComponent = () => <MHNavbar />;
