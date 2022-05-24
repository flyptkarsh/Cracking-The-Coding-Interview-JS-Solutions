// Merge sort
// N log(N)

function mergeSort(list, compare = (x, y) => {return x < y}){

    if(list.length <= 1) return list; 

    var {leftHalf, rightHalf }  = splitList(list); 

    return jointLists(mergeSort(leftHalf, compare), mergeSort(rightHalf, compare), compare); 
}

function splitList(list){
    if (list.length == 0) return {leftHalf : [], rightHalf : []}; 
    if (list.length == 1) return {leftHalf : list , rightHalf : []};
    var index = Math.floor(list.length / 2); 
    return {leftHalf : list.slice(0, index), rightHalf : list.slice(index)}; 
}

function jointLists(list1, list2, compare){
  var iterator = list1.length > list2.length ? list1.length : list2.length;
  var [result, index1, index2] = [[], 0, 0];
  while(true){
    if(compare(list1[index1], list2[index2])){
      result.push(list1[index1]);
      index1++;
    } else {
      result.push(list2[index2]);
      index2++;
    }
    if(index1 == list1.length || index2 == list2.length) break;
  }
  if(index1 < list1.length) return result.concat(list1.slice(index1));
  if(index2 < list2.length) return result.concat(list2.slice(index2));
  return result;
}

console.log(mergeSort([34, -2, 3 , 5, -6, 1, 35]));