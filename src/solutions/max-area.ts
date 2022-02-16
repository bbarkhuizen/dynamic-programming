/* Leetcode: https://leetcode.com/problems/container-with-most-water/



*/


/**
 * Calculate the Maximum area in a list of heights.
 * Time O(n^2) | Space O(1)
 * 
 * @param height array of heights
 * @returns max area.
 */
export function maxAreaBrute(height: number[]): number {
    if (height.length <= 0) return 0;
    if (height.length == 1) return height[0];
    if (height.length == 2) return Math.min(height[0],height[1]);   

    let max : number = 0;
    let length : number = height.length;
    let multiplier : number = 0;
    let heightLeft, heightRight : number = 0;

    for (let i = 0; i < length; i++) {
        for (let j = i+1; j < length; j++) {
            multiplier = j-i;
            heightLeft = height[i];
            heightRight = height[j];
            max = Math.max(max,Math.min(heightLeft,heightRight)*multiplier);
        }
    }

    return max;
};

/**
 * Calculate the Maximum area in a list of heights.
 * As this is a single pass, the complexity is as follows.
 * Time O(n) | Space O(1) 
 * 
 * @param height array of heights
 * @returns max area.
 */
export function maxArea(height: number[]): number {
    if (height.length <= 0) return 0;
    if (height.length == 1) return height[0];
    if (height.length == 2) return Math.min(height[0],height[1]);   
    
    let max : number = 0;
    let left : number = 0;
    let right : number = height.length-1;
    let multiplier : number = 0;
    let heightLeft, heightRight : number = 0;

    while (left < right) {
        heightLeft = height[left];
        heightRight = height[right];
        multiplier = right-left;
        max = Math.max(max,Math.min(heightLeft,heightRight)*multiplier);

        // what we are doing here is whichever side has the smallest hight, we move that (left index ->) (<- right index)
        if (heightLeft < heightRight) left++;
        else right--;
    }

    return max;

}

//console.log(maxArea([5,8])); // 5

console.log(maxArea([2,3,7,5,7,5,2,12,3])); // 35
//console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49
