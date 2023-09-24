// The Power Set problem is a classic problem in computer science. 
// It asks for generating all possible subsets of a given set. 
// For example, if you have a set {1, 2, 3}, the power 
// set would be {}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, and {1, 2, 3}.
function getPowerSet(originalSet) {
    let powerSet = [];
    
    function recurse(subset, index) {
        if(index === originalSet.length) {
            powerSet.push(subset);
            return;
        }
        
        recurse([...subset], index + 1); // Exclude the element at index
        recurse([...subset, originalSet[index]], index + 1); // Include the element at index
    }
    
    recurse([], 0);
    return powerSet;
}

let originalSet = [1, 2, 3];
console.log(getPowerSet(originalSet));
