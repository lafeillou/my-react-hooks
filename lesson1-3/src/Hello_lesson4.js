import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";

export const Hello = () => {
  // const renders = useRef(0);
  const [count, setCount] = useState(() => {
    return JSON.parse(localStorage.getItem("count"))
      ? JSON.parse(localStorage.getItem("count"))
      : 0;
  });
  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // console.log("hello renders: ", renders.current++);
  // const [rect, setRect] = useState({});
  // const divRef = useRef();

  // useLayoutEffect(() => {
  //   // console.log(divRef.current.getBoundingClientRect());
  //   setRect(divRef.current.getBoundingClientRect());
  // }, [data]);

  const [rect, divRef] = useMeasure([data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "loading..." : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
  );
};
