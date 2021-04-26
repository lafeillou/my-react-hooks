import React, { useState, useMemo, useCallback } from "react";
import "./App.css";
import { useFetch } from "./useFetch";
// function computedLongestWord(arr) {
//   if (!arr) {
//     return [];
//   }
//   console.log("computing longset word");
//   let longestWord = "";

//   JSON.parse(arr).forEach((sentence) =>
//     sentence.split(" ").forEach((word) => {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     })
//   );

//   return longestWord;
// }

const App = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  const computeLongestWord = useCallback((arr) => {
    if (!arr) {
      return [];
    }
    console.log("computing longset word");
    let longestWord = "";

    JSON.parse(arr).forEach((sentence) =>
      sentence.split(" ").forEach((word) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      })
    );

    return longestWord;
  }, []);

  const longestWord = useMemo(() => computeLongestWord(data), [
    data,
    computeLongestWord,
  ]);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  );
};
export default App;
