// Head recursion is when a recursive call happens at the beginning of the method before other processing
import React, { useState } from "react";

const HeadRecursion = () => {
  const [result, setResult] = useState([]);

  const headRecursion = (n) => {
    if (n <= 0) {
      return;
    }
    headRecursion(n - 1); // Recursive call
    setResult((prev) => [...prev, n]); // Print the value after recursion (head recursion)
  };

  return (
    <div>
      <h2>Head Recursion Example</h2>
      <button onClick={() => headRecursion(2)}>
        Print Numbers (Head Recursion)
      </button>
      <p>{result.join(", ")}</p>
    </div>
  );
};

export default HeadRecursion;

// function headRecursion(n) {
//   if (n <= 0) {
//     return;
//   }
//   fn(n - 1); // Recursive call first
//   console.log(n); // Print after the recursive call
// }
