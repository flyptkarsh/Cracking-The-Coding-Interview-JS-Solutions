// Triple Step: pg: 134, solution: pg: 342 - 343

// brute force recursive solution
function tripleStep(n) {
    if (n < 0){
        return 0;
    } else if (n == 0 ){
        return 1;
    } else {
        return tripleStep(n-1) + tripleStep(n-2) + tripleStep(n-3);
    }
}

console.log(tripleStep(3));
console.log(tripleStep(4));
console.log(tripleStep(500));

// helper method recursion with memoization solution
function tripleStepMemo(n) {
    const memo = Array(n + 1).fill(- 1);

    const tripleStepMemoHelper = (n) => {
        if (n < 0){
            return 0;
        } else if (n == 0 ){
            return 1;
        } else if (memo[n] > -1){
            return memo[n];
        } else {
            memo[n] = (tripleStepMemoHelper(n-1) + tripleStepMemoHelper(n-2) + tripleStepMemoHelper(n-3))
            return memo[n];
        }
    }
    tripleStepMemoHelper(n)
}


console.log(tripleStepMemo(3));
console.log(tripleStepMemo(4));
console.log(tripleStepMemo(500));
