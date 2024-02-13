// 8.5 Recursive multiply pg 135, solution: pg 350
// multiply with only the sum function

//  Simple Recursive Multiply
// function recursiveMultiply(a, b) {
//   if (b === 0) return 0;
//   if (b > 0) return a + recursiveMultiply(a, b - 1);
//   if (b < 0) return -recursiveMultiply(a, -b);
// }

// console.log(recursiveMultiply(3, 4)); // Output: 12
// console.log(recursiveMultiply(5, 0)); // Output: 0
// console.log(recursiveMultiply(-2, 3)); // Output: -6

// // Optimized Recursive Multiply
// function recursiveMultiplyOptimized(a, b) {
//   if (b === 0) return 0;
//   if (b < 0) return -recursiveMultiplyOptimized(a, -b);

//   let half = recursiveMultiplyOptimized(a, b >> 1);

//   if (b % 2 === 0) return half + half;
//   else return half + half + a;
// }

// console.log(recursiveMultiplyOptimized(3, 4)); // Output: 12
// console.log(recursiveMultiplyOptimized(5, 0)); // Output: 0
// console.log(recursiveMultiplyOptimized(-2, 3)); // Output: -6

function recursiveMultiply(a, b) {
  // Base case: if a is 0, the result is 0
  if (a === 0) {
    return 0;
  }
  // Base case: if a is 1, the result is b
  if (a === 1) {
    return b;
  }
  // Recursive step: halve a, double b, and add b to the result if a is odd
  let halfA = Math.floor(a / 2);
  let doubleB = b << 1; // equivalent to b * 2
  let result = recursiveMultiply(halfA, doubleB);
  // If a is odd, add b to the result
  if (a % 2 !== 0) {
    result += b;
  }
  return result;
}
