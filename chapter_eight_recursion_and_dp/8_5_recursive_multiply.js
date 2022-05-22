// 8.5 Recursive multiply pg 135, solution: pg 350
// multiply with only the sum function

// create a array of arrays and sum the number
function multiplyWithSum(a, b) {
  return Array(a)
    .fill(Array(b).fill(1))
    .flat()
    .reduce((sum, x) => sum + x);
}
console.log(multiplyWithSum(9, 9));


