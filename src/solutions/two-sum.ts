/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

export function twoSum(nums: number[], target: number):number[] {
    if (nums.length < 2  || target < 0) return [];
    
    for (let f : number = 0; f < nums.length; f++){
        for (let s : number = 1; s < nums.length; s++) {
            if ((nums[f]+nums[s]) === target) return [f,s];
        }
    }
    return [];   
}

export function twoSumMemo(nums: number[], target: number):number[] {    
    let memo : any = {};
    for (let i = 0; i < nums.length; i++){
        let n = nums[i];
        if (n in memo) {
            return [memo[n],i];
        }
        memo[target-n] = i;
    }

    return [];
}



