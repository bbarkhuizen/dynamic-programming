/*  Leetcode: https://leetcode.com/problems/permutations-ii/

Heap's Algorith: https://en.wikipedia.org/wiki/Heap%27s_algorithm

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
 
Example 1:
    Input: nums = [1,1,2]
    Output:
    [[1,1,2],
    [1,2,1],
    [2,1,1]]

Example 2:
    Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

*/

import { generateKeyPair } from "crypto";


/**
 * This is Heap's Algorithm's implementation in Typescript. This doesn't deal with duplicates.
 * Notes: this does not deal with duplicates.
 * @param nums Array of numbers to find the permutations to.
 * @returns the permutations.
 */
export function heapAlgorith(nums: number[]): number[][] {
    let result : number [][] = [];
    generate(nums.length, nums);
    return result;

    function generate(k : number, arr : number[]) {
        if (k === 1 ) {
            result.push([...arr]);            
        } else {
            generate(k-1, arr);

            for (let i = 0; i < k-1; i++) {
                if (k % 2 === 0) { // even
                    [arr[i],arr[k-1]] = [arr[k-1],arr[i]]; // Destructuring Assignment (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
                } else {
                    [arr[0],arr[k-1]] = [arr[k-1],arr[0]];
                }
                generate(k-1, arr);
            }
        }
    }
    
};

/** 
 * See Video: https://www.youtube.com/watch?v=9QOHkW-ZrVE&t=375s
 * Generate the permutations for an array of numbers, but exclude duplicates.
 * see: depth first search
 * 
 * Time: O(n!*n) ... Time is n factorial x n. 
 *      if n = 3, the graph will be three levels, leaf nodes being n*3 = 6, middle row n*2 = 6, times the first node (n)
 * Space: O(n!*n)
 * @param nums Number array
 * @returns return the distinct permutations
 */
export function permutations(nums : number[]) : number[][] {
    let result : number[][] = [];

    gen(0,nums);

    return result;

    function gen(i : number, nums : number[]) {
        if (i === nums.length) {
            result.push(nums.slice());
        } else {
            let hash : any ={}
            for (let j = i; j < nums.length; j++) {
                if (!(nums[j] in hash)) {
                    hash[nums[j]] = true;
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    gen(i+1, nums);
                    [nums[j], nums[i]] = [nums[i], nums[j]];
    
                }
            }
        }
    }


}
console.log(heapAlgorith([1,1,3]));
console.log(permutations([1,1,3]));