// Tail recursion is when a recursive call happens at the end of the method before after processing
import React, { useState } from "react";

const TailRecursion = () => {
  const [result, setResult] = useState([]);

  const tailRecursion = (n, acc = []) => {
    if (n <= 0) {
      setResult(acc);
      return;
    }
    tailRecursion(n - 1, [n, ...acc]); // Operation performed before recursion (tail recursion)
  };

  return (
    <div>
      <h2>Tail Recursion Example</h2>
      <button onClick={() => tailRecursion(2)}>
        Print Numbers (Tail Recursion)
      </button>
      <p>{result.join(", ")}</p>
    </div>
  );
};

export default TailRecursion;

// function tailRecursion(n, acc = []) {
//   if (n <= 0) {
//     console.log(...acc); // Print the accumulated values once recursion ends
//     return;
//   }
//   tailRecursion(n - 1, [...acc, n]); // Accumulate values before the recursive call
// }
