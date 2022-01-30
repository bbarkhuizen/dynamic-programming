import moment from 'moment';
import { checkAllEqual } from './helper';
/**
 * Write a function that takes in a targetSum and an array of numbers as arguments.
 * 
 * The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.
 * 
 * If there are multiple combinations possible, you may return any single one. 
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

/**
 * What combination of numbers can add up to become targetSum using tabulation.
 *      m = target sum; n = numbers.length
 *      O(n^m * m) time
 *      O(m) space
 * @param targetSum The target of the addition
 * @param numbers number of values to add
 * @returns the array of valid options.
 */
 export function howSumTab(targetSum: number, numbers:number[]) : number[] | null {
    let table : (number[] | null)[] = (new Array<number[]|null>(targetSum+1)).fill(null);
    table[0] = [];
   
    for (let i = 0; i<= targetSum; i++){
        if (table[i] !== null) {
            
            for (let number of numbers) {
                if ((number+i)<=targetSum){
                    table[number+i] = [...(table[i] as number[]),number];
                }
            }
        }
    }
    return table[targetSum];

}

export function howSumTest(total: number, numbers : number[]) {
    let plain = howSum(total,numbers);
    let memo = howSumMemo(total,numbers);
    let tab = howSumTab(total,numbers);
    
    console.log(`total: ${total}; numbers: [${numbers}]; plain:${plain}; memo:${memo}; tab:${tab};`);
    if (total>0) howSumTest(total-1,numbers);
}
