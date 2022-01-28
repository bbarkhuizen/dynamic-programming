/**
 * Write a function that takes in a targetSum and an array of numbers as arguments.
 * 
 * The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.
 * 
 * If there are multiple combinations possible, you may return any single one. 
 */

/**
 * What combination of numbers can add up to become targetSum.
 *      m = target sum; n = numbers.length
 *      O(n^m * m) time
 *      O(m) space
 * @param targetSum The target of the addition
 * @param numbers number of values to add
 * @returns the array of valid options.
 */
 export function howSum(targetSum: number, numbers:number[]) : number[] | null{
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for(let i : number = 0; i < numbers.length; i++){
        const combination = howSum(targetSum-numbers[i],numbers);
        if (combination !== null) {
            return [...combination, numbers[i]];
        }
    }
    return null;
}

/**
 * What combination of numbers can add up to become targetSum using memoization
 *      m = target sum; n = numbers.length
 *      O(n*m*m) = O(n*m^2) time
 *      O(m*m) = O(m^2) space
 * @param targetSum The target of the addition
 * @param numbers number of values to add
 * @returns the array of valid options.
 */
 export function howSumMemo(targetSum: number, numbers:number[], memo :any={}) : number[] | null{
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for(let i : number = 0; i < numbers.length; i++){
        const remainder = targetSum-numbers[i];        
        const remainderCombination = howSumMemo(remainder,numbers,memo);

        if (remainderCombination !== null) {
            memo[targetSum] = [...remainderCombination, numbers[i]];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return memo[targetSum];
}

// console.log('howSum',howSum(7,[2,3]));
// console.log('howSumMemo',howSumMemo(7,[2,3]));

// console.log('howSum',howSum(7,[5,3,4,7]));
// console.log('howSumMemo',howSumMemo(7,[5,3,4,7]));

// console.log('howSum',howSum(300,[7, 14]));
// console.log('howSumMemo',howSumMemo(300,[7, 14]));

