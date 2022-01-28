import moment from 'moment';
import { checkAllEqual } from './helper';

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
 export function canSum(total: number, numbers: number[]) : boolean {
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
 export function canSumMemo(total: number, numbers: number[], memo : any = {}) : boolean {
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

/**
 * Check if any combindation of the numbers array can be summed up to the total using tabulation.
 *      O(m*n) time
 *      O(m) space
 * @param total the total to be summed up to.
 * @param numbers the array of numbers that we want to test.
 * @returns returns true if successful. 
 */
 export function canSumTab(total: number, numbers: number[]) : boolean {
    let tab : boolean[] = new Array<boolean>(total+1).fill(false);
    tab[0] = true;
    for(let totalIndex = 0; totalIndex<= total; totalIndex++){
        if (tab[totalIndex]) { // if we have a true, then set the forward items true.
            for(let numbersIndex = 0; numbersIndex < numbers.length; numbersIndex++) { // now loop through the numbers
                let forwardIndex = numbers[numbersIndex] + totalIndex; // get the forward index for each.
                if (forwardIndex <= total) { // if we are still inside the table then set the forward value to true.
                    tab[forwardIndex] = true;
                }
            }
    
        }
    }
    return tab[total];
}

export function canSumTest(total: number, numbers : number[]) {
    let plain = canSum(total,numbers);
    let memo = canSumMemo(total,numbers);
    let tab = canSumTab(total,numbers);
    let passed = checkAllEqual(plain,memo,tab); 
    console.log('canSum',passed ? 'PASS' : 'FAIL',`total: ${total}; numbers: [${numbers}]; plain:${plain}; memo:${memo}; tab:${tab};`,passed ? plain : 'FAIL');
    if (total>0) canSumTest(total-1,numbers);
}

//console.log(canSumTab(3,[1,2])); // true
//console.log(canSumTab(7,[6,5])); // false
// console.log(canSumTab(7,[2,3])); // false
// console.log(canSum(7,[2,3])); // false
//console.log(canSumTab(300,[7,14])); // false