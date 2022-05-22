// Bubble sort
// Pg: 146
// runtime O(n^2) average and worst case, memory O(1)

function bubbleSort(arr) {
  // last i elements are already in place
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // checking if the item at the present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// This is our unsorted array
var arr = [234, 43, 55, 63, 5, 6, 235, 547];
console.log(bubbleSort(arr));
