// Selection sort
// Pg: 146

// runtime O(n^2) average and worst case, memory O(1)

function selectionSort(inputArr) {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  return inputArr;
}
// This is our unsorted array
var arr = [234, 43, 55, 63, 5, 6, 235, 547];
console.log(selectionSort(arr));
