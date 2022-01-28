/**
 * Write a function 'fib(n)' that takes in a number as an argumetn. 
 * The function should return the n-th number of the Fibonacci sequence.
 * 
 * The 0th number of the sequence is 0.
 * The 1st number of the sequence is 1;
 * 
 * To Generate the next number of the sequence, we sum the previous two.
 */

/**
 * Calculate the fibonacci number for the nth item in the sequence.
 *      O(2^n) time 
 *      O(n) space
 * @param n the index of the fibonacci sequence to return.
 * @returns the fibonacci number at the nth index.
 */
export function fibonacci(n: number) : number { // O(2^n) S(n)
    if (n === 0) return 0; // base case n = 0 always is 0
    if (n === 1 || n === 2) return 1; // base case n = 1 or n = 2, results in fib of 1
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
 export function fibonacciMemo(n: number, memo : any = {}) : number {
    if (n in memo ) return memo[n] as number; // if we have stored the result, then let's use it. 
    if (n === 0) return 0; // base case n = 0 always is 0
    if (n === 1 || n === 2) return 1; // base case n = 1 or n = 2, results in fib of 1    
    memo[n] = fibonacciMemo(n-1, memo) + fibonacciMemo(n-2, memo); // store the result for later use.
    return memo[n];
}    

/**
 * Calculate the fibonacci number for the nth item in the sequence.      
 *      O(n) time 
 *      O(n) space
 * @param n the index of the fibonacci sequence to return.
 * @returns the fibonacci number at the nth index.
 */
 export function fibonacciTab(n: number) : number { // O(2^n) S(n)
    let fibArray : number[] = [0,1,1];    

    for(let i = 3; i <= n; i++) {
        fibArray.push(fibArray[i-2]+fibArray[i-1]);        
        // or this works too...
        // fibArray[i] = fibArray[i-2]+fibArray[i-1];
    }

    return fibArray[n];
}


