/**
 * PROBLEM
 * 
 * Write a function that takes in a target sum and an array of numbers as arguments.
 *  
 * The function needs to return a boolean indicating whether or not it is possible to generate the target sum using the numbers from the array.
 * 
 * - you may use an element of the array as many times as needed.
 * - you may assume that all input numbers are nonnegative. 
 * 
 */

/**
 * Check if any combindation of the numbers array can be summed up to the total.
 *      O(n^m) time
 *      O(m) space
 * @param total the total to be summed up to.
 * @param numbers the array of numbers that we want to test.
 * @returns returns true if successful. 
 */
function canSum(total: number, numbers: number[]) : boolean {
    if (total === 0) return true;
    if (total < 0) return false;
    for (let i = 0; i < numbers.length; i++) {
        let remainder = total - numbers[i];
        if (canSum(remainder, numbers)) return true;
    }
    return false;
}

/**
 * Check if any combindation of the numbers array can be summed up to the total.
 *      O(m*n) time
 *      O(m) space
 * @param total the total to be summed up to.
 * @param numbers the array of numbers that we want to test.
 * @param memo the memo to cache results in
 * @returns returns true if successful. 
 */
 function canSumMemo(total: number, numbers: number[], memo : any = {}) : boolean {
    if (total in memo) return memo[total];
    if (total === 0) return true;
    if (total < 0) return false;
    for (let i = 0; i < numbers.length; i++) {
        let remainder = total - numbers[i];
        memo[remainder] = canSumMemo(remainder, numbers, memo);
        if (memo[remainder]) return true;
    }
    memo[total]=false;
    return false;
}

console.log(canSumMemo(7,[5,3,4,7])); // true
console.log(canSumMemo(7,[6,5])); // false
console.log(canSumMemo(7,[6,7])); // false
console.log(canSumMemo(300,[7,14])); // false