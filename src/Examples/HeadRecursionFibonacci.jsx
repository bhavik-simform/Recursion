import React, { useState } from "react";

const HeadRecursionFibonacci = () => {
  const [result, setResult] = useState([]);

  // Head recursion for Fibonacci sequence
  const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive calls made first
  };

  const generateFibonacci = (n) => {
    const fibSequence = [];
    for (let i = 0; i < n; i++) {
      fibSequence.push(fibonacci(i)); // Generate Fibonacci sequence
    }
    setResult(fibSequence);
  };

  return (
    <div>
      <h2>Head Recursion Fibonacci Example</h2>
      <button onClick={() => generateFibonacci(10)}>Generate Fibonacci</button>
      <p>{result.join(", ")}</p>
    </div>
  );
};

export default HeadRecursionFibonacci;

// function headRecursionFibonacci(n) {
//   if (n == 0 || n == 1)
//     return n;

//   // Recursive call first (head recursion)
//   return headRecursionFibonacci(n - 1) + headRecursionFibonacci(n - 2);
// }
