import React from "react";
import { useCountRenders } from "./useCountRenders";

export const Square = React.memo(({ n, increment }) => {
  // hook
  useCountRenders();
  return <button onClick={() => increment(n)}>{n}</button>;
});
