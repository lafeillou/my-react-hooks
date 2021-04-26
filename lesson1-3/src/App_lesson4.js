import React, { useState, useRef, useLayoutEffect } from "react";
import { useForm } from "./useForm";
import "./App.css";

import { Hello } from "./Hello_lesson4";
import { useMeasure } from "./useMeasure";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  // dom引用
  const inputRef = useRef();

  const [showHello, setShowHello] = useState(true);

  useLayoutEffect(() => {
    console.log(inputRef);
  }, []);

  const [rect, inputRef2] = useMeasure([]);

  return (
    <div>
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
      <input
        ref={inputRef}
        name="email"
        placeholder="emial"
        value={values.email}
        onChange={handleChange}
      />
      <input
        ref={inputRef2}
        name="firstName"
        placeholder="first name"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus
      </button>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
    </div>
  );
};
export default App;
