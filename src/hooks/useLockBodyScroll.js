import React from "react";

export function useLockBodyScroll(locked = true) {
  React.useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (locked) {
      document.body.style.overflow = "hidden";
    }

    return () => (document.body.style.overflow = originalStyle);
  }, [locked]);
}

export default useLockBodyScroll;
