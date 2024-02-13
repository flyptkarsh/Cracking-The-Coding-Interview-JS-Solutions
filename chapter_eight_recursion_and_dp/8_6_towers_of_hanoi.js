// Towers of Hanoi: pg: 135 solution: 353
// In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower.
// The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e., each disk sits on top of an even larger one).

// Recursive solution to solve Towers of Hanoi problem
function towersOfHanoi(n, source, auxiliary, target) {
    if (n > 0) {
        // Move n - 1 disks from source to auxiliary, using target as a temporary rod
        towersOfHanoi(n - 1, source, target, auxiliary);
        
        // Move the nth disk from source to target
        console.log(`Move disk ${n} from ${source} to ${target}`);
        
        // Move the n - 1 disks from auxiliary to target, using source as a temporary rod
        towersOfHanoi(n - 1, auxiliary, source, target);
    }
}

// Example usage
towersOfHanoi(3, 'A', 'B', 'C');

// Example usage:
towersOfHanoi(3, 'A', 'B', 'C');

// Iterative solution to solve Towers of Hanoi problem
function towersOfHanoiIterative(n) {
    let source = [];
    let auxiliary = [];
    let target = [];
    
    // Initialize the source rod with disks in descending order
    for (let i = n; i > 0; i--) {
        source.push(i);
    }
    
    // Calculate the total number of moves required - (2^n) - 1
    let totalMoves = Math.pow(2, n) - 1;
    
    // Function to move a disk between rods
    function moveDisk(fromRod, toRod) {
        // Move a disk if the move is valid
        if (toRod.length === 0 || fromRod[fromRod.length - 1] < toRod[toRod.length - 1]) {
            toRod.push(fromRod.pop());
        } else {
            fromRod.push(toRod.pop());
        }
    }

    for (let moves = 0; moves < totalMoves; moves++) {
        // Use the pattern of moves to determine the source and destination rods
        if (moves % 3 === 0) {
            moveDisk(source, target);
        } else if (moves % 3 === 1) {
            moveDisk(source, auxiliary);
        } else {
            moveDisk(auxiliary, target);
        }
    }
    
    console.log("Target rod: ", target);
}

// Example usage
towersOfHanoiIterative(3);
