/**
 * Write a function that takes in a targetSum and an array of numbers as arguments.
 * 
 * The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum
 * 
 * if there is a tie for the shortest combination, you may return any of the shortest.
 * 
 * bestSum(7, [5,3,4,7]) = [7]
 * bestSum(8, [2,3,5]) = [3,5]
 */

 export type ArrayOrNull = number[] | null;
/**
 * Find the best, least, amount of numbers to sum up to the targetSum, if any.
 *      m = targetSum; n = numbers.length
 *      O(n^m * m) time
 *      O(m * m) = O(m^2) space
 * @param targetSum target to sum up to.
 * @param numbers combination of numbers to analyze.
 * @returns optimal amount of numbers or null.
 */
 export function bestSum(targetSum : number, numbers: number[]) : ArrayOrNull {
    

    if (targetSum === 0) return []; // base case, if there is a perfect sum.
    if (targetSum < 0) return null; // base case if the branch doesn't work.
    let shortestCombination : ArrayOrNull = null; // we have to keep track of the shortest.

    for(let n : number = 0; n < numbers.length; n++) {

        const remainder : number = targetSum-numbers[n]; // new targetSum.
        const remainderCombination : ArrayOrNull  = bestSum(remainder,numbers); // new targetSum combinations

        if (remainderCombination !== null) { // if the remainder combination is not null, then there's a valid branch.
            const combination = [...remainderCombination, numbers[n]]; // new array with remainder combination plus our number.
            if (shortestCombination === null  || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    return shortestCombination;
}

/**
 * Find the best, least, amount of numbers to sum up to the targetSum, if any.
 *      m = targetSum; n = numbers.length
 *      O(n^m * m) time
 *      O(m * m) = O(m^2) space
 * @param targetSum target to sum up to.
 * @param numbers combination of numbers to analyze.
 * @param memo memoize storage
 * @returns optimal amount of numbers or null.
 */
 export function bestSumMemo(targetSum : number, numbers: number[], memo: any = {}) : ArrayOrNull {
    
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return []; // base case, if there is a perfect sum.
    if (targetSum < 0) return null; // base case if the branch doesn't work.
    let shortestCombination : ArrayOrNull = null; // we have to keep track of the shortest.

    for(let n : number = 0; n < numbers.length; n++) {

        const remainder : number = targetSum-numbers[n]; // new targetSum.
        const remainderCombination : ArrayOrNull  = bestSumMemo(remainder,numbers, memo); // new targetSum combinations

        if (remainderCombination !== null) { // if the remainder combination is not null, then there's a valid branch.
            const combination = [...remainderCombination, numbers[n]]; // new array with remainder combination plus our number.
            if (shortestCombination === null  || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

// console.log((new Date()).toTimeString());

// console.log('bestSum',bestSum(7,[5, 3, 4, 7])); // [7]
// console.log('bestSum',bestSum(8,[2, 3, 5])); // [3,5]
// console.log('bestSum',bestSum(8,[1, 4, 5])); // [4,4]
// console.log('BestSum',bestSum(300,[7, 14]));
// //console.log('BestSum',bestSum(100,[1, 2, 5, 25]));
// console.log((new Date()).toTimeString());

// console.log('bestSumMemo',bestSumMemo(7,[5, 3, 4, 7])); // [7]
// console.log('bestSumMemo',bestSumMemo(8,[2, 3, 5])); // [3,5]
// console.log('bestSumMemo',bestSumMemo(8,[1, 4, 5])); // [4,4]
// console.log('BestSumMemo',bestSumMemo(300,[7, 14]));
// //console.log('BestSumMemo',bestSumMemo(100,[1, 2, 5, 25]));
// console.log((new Date()).toTimeString());
