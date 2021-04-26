import { useLayoutEffect, useRef, useState } from "react";

export const useMeasure = (deps) => {
  const [rect, setRect] = useState({});
  const divRef = useRef();

  useLayoutEffect(() => {
    setRect(divRef.current.getBoundingClientRect());
    // eslint-disable-next-line
  }, deps);

  return [rect, divRef];
};
