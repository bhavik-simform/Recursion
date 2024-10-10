import React, { useState } from "react";

const TailRecursionFibonacci = () => {
  const [result, setResult] = useState([]);

  // Tail recursion for Fibonacci sequence
  const fibonacciTailRecursion = (n, a = 0, b = 1, acc = []) => {
    if (n <= 0) {
      return acc; // Base case: return the accumulated Fibonacci sequence
    }
    return fibonacciTailRecursion(n - 1, b, a + b, [...acc, a]); // Recursive call with accumulated sequence
  };

  const generateFibonacci = (n) => {
    const fibSequence = fibonacciTailRecursion(n); // Get Fibonacci sequence
    setResult(fibSequence);
  };

  return (
    <div>
      <h2>Tail Recursion Fibonacci Example</h2>
      <button onClick={() => generateFibonacci(10)}>Generate Fibonacci</button>
      <p>{result.join(", ")}</p>
    </div>
  );
};

export default TailRecursionFibonacci;

// function tailRecursionFibonacci(n, a = 0, b = 1) {
//     if (n == 0) return a;
//     if (n == 1) return b;

//     // Recursive call as the last operation (tail recursion)
//     return tailRecursionFibonacci(n - 1, b, a + b);
//   }
