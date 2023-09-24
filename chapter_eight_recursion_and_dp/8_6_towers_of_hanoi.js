// Towers of Hanoi: pg: 135 solution: 353
// In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower.
// The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e., each disk sits on top of an even larger one).

// Recursive solution
function towersOfHanoi(n, source, auxiliary, target) {
    if (n > 0) {
        // Move n - 1 disks from source to auxiliary rod
        towersOfHanoi(n - 1, source, target, auxiliary);
        
        // Move the nth disk from source to target rod
        console.log(`Move disk ${n} from ${source} to ${target}`);
        
        // Move the n - 1 disks from auxiliary rod to target rod
        towersOfHanoi(n - 1, auxiliary, source, target);
    }
}

// Example usage:
towersOfHanoi(3, 'A', 'B', 'C');

// Iterative solution
function towersOfHanoiIterative(n) {
    var source = [];
    var auxiliary = [];
    var target = [];
    
    // Initialize the source rod
    for (let i = n; i > 0; i--) {
        source.push(i);
    }
    
    // Calculate the total number of moves required
    var totalMoves = Math.pow(2, n) - 1;
    
    var moves = 0;
    var from, to;
    while (moves < totalMoves) {
        // Determine the from and to rods for the current move
        if (moves % 3 === 0) {
            from = source;
            to = target;
        } else if (moves % 3 === 1) {
            from = source;
            to = auxiliary;
        } else {
            from = auxiliary;
            to = target;
        }
        
        // Make a valid move between from and to rods
        if (to.length === 0 || (from.length > 0 && from[from.length - 1] < to[to.length - 1])) {
            to.push(from.pop());
        } else {
            from.push(to.pop());
        }
        
        moves++;
    }
    
    // Print the result
    console.log("Target rod: ", target);
}

// Example usage:
towersOfHanoiIterative(3);
