import ReactDOM from "react-dom";
import React, { useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const rootPortal = document.getElementById("portal");

const Portal: React.FC<Props> = ({ children }) => {
  const el = document.createElement("div");

  useEffect(() => {
    rootPortal?.appendChild(el);
    return (): void => {
      rootPortal?.removeChild(el);
    };
  }, []);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
