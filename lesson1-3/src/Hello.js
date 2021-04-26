import React from "react";
import { useCountRenders } from "./useCountRenders";

export const Hello = React.memo(({ increment }) => {
  // hook
  useCountRenders();
  return <button onClick={() => increment(5)}>hello</button>;
});

// ({ increment }) => {
//   return <button onClick={increment}>hello</button>;
// };
