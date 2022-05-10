// Magic Index: pg: 135, solution: 346
function slowMagicIndex(array) {
  	var isMagic = false; 
  	array.forEach( function(element, index) {
      if (element === index) {
        isMagic = true; 
      }
    }); 
  return isMagic
}; 

const testArrayFalse = [1, 0, 3, 4];
const testArrayTrue = [1, 1];

console.log(slowMagicIndex(testArrayFalse));
console.log(slowMagicIndex(testArrayTrue));


// the array is sorted, we can use this condition. 
// similar to binary search, start at the middle of the array and partition it, then look for the answer. 
const binarySearch = function(array, start, arr_end){
    if (start > arr_end){
        return -1; 
    }
    let mid =  Math.floor((start + arr_end) / 2);  
		console.log(array[mid], mid)
    if (array[mid] == mid) {
        return mid; 
    } else if (array[mid] > mid) {
        binarySearch(array, start, mid - 1)
    } else {
        binarySearch(array, mid + 1, arr_end)
    }
}

function fastMagicIndex(array) {
    return binarySearch(array, 0, array.length + 1 )
}

console.log(fastMagicIndex(testArrayFalse));
console.log(fastMagicIndex(testArrayTrue));
