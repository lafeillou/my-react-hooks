import React, { useRef, useState, useEffect } from "react";
import { useFetch } from "./useFetch";

export const Hello = () => {
  const renders = useRef(0);
  const [count, setCount] = useState(() => {
    return JSON.parse(localStorage.getItem("count"))
      ? JSON.parse(localStorage.getItem("count"))
      : 0;
  });
  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  console.log("hello renders: ", renders.current++);

  return (
    <div>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
  );
};
