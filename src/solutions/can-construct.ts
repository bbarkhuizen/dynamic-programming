/**
 * Write a function that accepts a target string and an array of strings.
 * eg: canConstruct(target, wordbank)
 * 
 * The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating the elements of the 'wordbank' array.
 * 
 * the may reuse elements of the 'wordbank' as many times as needed.
 */

/**
 * Can you construct the target string a combination of items in the wordbank.
 *      m = target.length; wordbank.length
 *      O(n^m * m) time
 *      O(m*m) = O(m^2) space
 * @param target target string to build.
 * @param wordbank bank of words to use to build target.
 * @returns true if successful.
 */
 export function canConstruct(target: string, wordbank : string[]) : boolean {
    // Depth of tree is m (target.length)
    // For time: each level (m) has n children, n^m
    if (target === '') return true;
    
    for (let i: number = 0; i< wordbank.length; i++) {
        if (target.startsWith(wordbank[i])) {
            const newTarget : string = target.slice(wordbank[i].length);
            if(canConstruct(newTarget,wordbank)) return true;
        }
    }
    return false;    
}

/**
 * Can you construct the target string a combination of items in the wordbank.
 *      O(n * m^2) time
 *      O(m^2) space
 * @param target target string to build.
 * @param wordbank bank of words to use to build target.
 * @param memo memo to cache results.
 * @returns true if successful.
 */
 export function canConstructMemo(target: string, wordbank : string[], memo: any = {}) : boolean {
    if (target in memo) return memo[target];
    if (target === '') return true;
    
    for (let i: number = 0; i< wordbank.length; i++) {
        if (target.startsWith(wordbank[i])) {
            const newTarget : string = target.slice(wordbank[i].length);
            const newTargetCanConstruct = canConstructMemo(newTarget,wordbank,memo);
            if(newTargetCanConstruct) {
                memo[newTarget] = newTargetCanConstruct;
                return memo[newTarget];
            };
        }
    }
    memo[target] = false;
    return false;    
}

// console.log((new Date()).toTimeString());
// console.log(canConstruct('abcdef',['ab','ef','cd'])) // true
// console.log(canConstruct('hello',['h','e','ll','b'])) // false
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeee','eeeee'])) // false
// console.log((new Date()).toTimeString());console.log((new Date()).toTimeString());

// console.log(canConstructMemo('abcdef',['ab','ef','cd'])) // true
// console.log(canConstructMemo('hello',['h','e','ll','b'])) // false
// console.log(canConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeee','eeeee'])) // false
// console.log((new Date()).toTimeString());