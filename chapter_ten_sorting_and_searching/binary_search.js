// Binary Search pg: 149

const binarySearch = function (array, target) {
  return recursiveBinarySearch(array, target, 0, array.length - 1);
};

const recursiveBinarySearch = function (array, target, start, end) {
  // base condition
  if (start > end) return false;
  // middle index
  let mid = Math.floor((start + end) / 2);
  // compare mid with given key x
  if (array[mid] === target) return true;
  // if el at mid greater than x,
  // search in the left half of mid
  if (array[mid] > target)
    return recursiveBinarySearch(array, target, start, mid - 1);
  else return recursiveBinarySearch(array, target, mid + 1, end);
};

let arr = [1, 3, 5, 7, 8, 9];
let target = 5;

console.log(binarySearch(array, target));
