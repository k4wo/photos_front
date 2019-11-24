import { useEffect } from "react";

// https://stackoverflow.com/a/54292872
const useOutsideClick = (onOuterClick: () => void, innerRef: any): void => {
  useEffect(
    () => {
      function handleClick(e: MouseEvent): void {
        if (innerRef.current && !innerRef.current.contains(e.target)) {
          onOuterClick();
        }
      }

      // only add listener, if the element exists
      if (innerRef.current) {
        document.addEventListener("click", handleClick, true);
      }

      // unmount previous first in case inputs have changed
      return (): void =>
        document.removeEventListener("click", handleClick, true);
    },
    [onOuterClick, innerRef] // invoke again, if inputs have changed
  );
};

export default useOutsideClick;
