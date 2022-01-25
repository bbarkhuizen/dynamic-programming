/**
 * Calculate the Fibonacci value for a given value.
 */

/**
 * Calculate the fibonacci number for the nth item in the sequence.
 *      O(2^n) time 
 *      O(n) space
 * @param n the index of the fibonacci sequence to return.
 * @returns the fibonacci number at the nth index.
 */
function fibonacci(n: number) : number { // O(2^n) S(n)
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

/**
 * Calculate the fibonacci number for the nth item in the sequence, using memoization.
 *      O(n) time 
 *      O(n) space
 * @param n the index of the fibonacci sequence to return.
 * @param memo for storing the already calculated value, do not pass on first call.
 * @returns the fibonacci number at the nth index.
 */
function fibonacciMemo(n: number, memo : any = {}) : number {
    if (n in memo ) return memo[n] as number;
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    
    memo[n] = fibonacciMemo(n-1, memo) + fibonacciMemo(n-2, memo);

    return memo[n];
}    

// ---------------------------------------------------------------------------------------------
const iMax : number = 40;

console.log('Fibonacci standard recursion: O(2^n) time O(n) space')
for (let i = 0; i<=iMax; i++) {
    console.log(i,'=',fibonacci(i).toLocaleString());
}
console.log('Fibonacci with memoization: O(n) time O(n) space')
for (let i = 0; i<=iMax; i++) {
    console.log(i,'=',fibonacciMemo(i).toLocaleString());
}
// ---------------------------------------------------------------------------------------------
