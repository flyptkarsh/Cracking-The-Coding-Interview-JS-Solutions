// Imagine a robot sitting on the upper left corner of a grid with r rows and c columns.
// The robot can only move in two directions: right and down. However, certain cells are "off-limits,"
// meaning the robot cannot step on them. Design an algorithm to find
// a path for the robot from the top left to the bottom right.

// To solve this problem, you can use a recursive approach, dynamic programming, or graph traversal algorithms like Depth-First Search (DFS).

// Example Usage:
let grid = [
    [true, true, false],
    [false, true, false],
    [false, true, true],
  ];
  
// Recursive Approach:
// If the current cell is out of bounds or is an off-limit cell, return false.
// If the current cell is the destination or a path has already been found, return true.
// Recur to the right and down.
// If a path is found, store the current cell in the path.
// Return whether a path is found.
function findPath(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) return null;
  let path = [];
  let failedPoints = new Set();
  if (getPath(grid, grid.length - 1, grid[0].length - 1, path, failedPoints)) {
    return path;
  }
  return null;
}

function getPath(grid, row, col, path, failedPoints) {
  if (col < 0 || row < 0 || !grid[row][col]) return false;

  let point = `${row},${col}`;

  if (failedPoints.has(point)) return false;

  let isAtOrigin = row === 0 && col === 0;

  if (
    isAtOrigin ||
    getPath(grid, row, col - 1, path, failedPoints) ||
    getPath(grid, row - 1, col, path, failedPoints)
  ) {
    path.push(point);
    return true;
  }

  failedPoints.add(point);
  return false;
}



console.log(findPath(grid)); // Output: ['0,0', '0,1', '1,1', '2,1', '2,2']

// In this example, grid is a 2D array where true represents a cell the robot can step on,
// and false represents an off-limit cell. The findPath function returns an array of strings
// representing a path from the top-left to the bottom-right of the grid, or null if no such path exists.
// Each string in the path array is a point in the format 'row,col'.

// Dynamic Programming Approach:
// Create a memoization table to store the results of subproblems.
// For each cell, check if it is reachable by checking the cells above and to the left of it.
// If the cell is reachable and is not off-limits, store the result in the memoization table.
// Return the path from the memoization table.

function findPath(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) return null;

  let rows = grid.length;
  let cols = grid[0].length;
  let path = [];

  // dp table to store the paths for subproblems
  let dp = new Array(rows).fill(null).map(() => new Array(cols).fill(null));

  // If the destination is reachable, start the traversal
  if (grid[rows - 1][cols - 1] && getPath(grid, 0, 0, path, dp)) {
    return path;
  }

  return null;
}

function getPath(grid, row, col, path, dp) {
  if (row >= grid.length || col >= grid[0].length || !grid[row][col])
    return false;

  // If this subproblem is already solved, return the result
  if (dp[row][col] !== null) return dp[row][col];

  let isAtDestination = row === grid.length - 1 && col === grid[0].length - 1;

  // If we are at the destination or we have a path from the right or down cell, we have a path from this cell
  if (
    isAtDestination ||
    getPath(grid, row, col + 1, path, dp) ||
    getPath(grid, row + 1, col, path, dp)
  ) {
    path.push([row, col]);
    dp[row][col] = true;
    return true;
  }

  dp[row][col] = false;
  return false;
}



console.log(findPath(grid)); // Output: [ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ], [ 2, 1 ], [ 2, 2 ] ]
