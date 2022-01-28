/**
 * Write a function that accepts a target string and an array of strings.
 * 
 * The function should return the number of ways taht the 'target' can be constructed by concatenating elements of the 'wordbank' array.
 * 
 * You may reuse elements of 'workdbank' as many times as needed.
 */

/**
 * Count the number of ways that a bank of words can be used to construct a word.
 *      n = target.length; m = wordbank.length
 *      O(n^m * m) time
 *      O(m*m) space
 * @param target target string to construct
 * @param wordbank bank of words to be used
 * @returns number of ways we can construct the string using the bank.
 */
 export function countConstruct(target: string, wordbank: string[]) : number {
    if (target === '') return 1;

    let count : number = 0;
    for(let i = 0; i < wordbank.length; i++) {
        if (target.startsWith(wordbank[i])) {
            const suffix : string = target.slice(wordbank[i].length);
            count += countConstruct(suffix,wordbank);
        }
    }

    return count;
}

/**
 * Count the number of ways that a bank of words can be used to construct a word, using memoization
 *      n = target.length; m = wordbank.length
 *      O(n*m*m) = O(n * m^2) time
 *      O(m*m) space
 * @param target target string to construct
 * @param wordbank bank of words to be used
 * @returns number of ways we can construct the string using the bank.
 */
 export function countConstructMemo(target: string, wordbank: string[], memo: any = {}) : number {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let count : number = 0;
    for(let i = 0; i < wordbank.length; i++) {
        if (target.startsWith(wordbank[i])) {
            const suffix : string = target.slice(wordbank[i].length);
            count += countConstructMemo(suffix,wordbank,memo);
        }
    }
    memo[target]=count;
    return count;
}

// console.log((new Date()).toTimeString());
// console.log(countConstruct('abcdef',['ab','ef','cd','abc','def'])) // 2
// console.log(countConstruct('hello',['h','e','ll','o','hello','he','llo'])) // 5
// console.log(countConstruct('purple',['purp','p','ur','le','purpl'])) // 2
// console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeee','eeeee'])) // ?
// console.log((new Date()).toTimeString());

// console.log(countConstructMemo('abcdef',['ab','ef','cd','abc','def'])) // 2
// console.log(countConstructMemo('hello',['h','e','ll','o','hello','he','llo'])) // 5
// console.log(countConstructMemo('purple',['purp','p','ur','le','purpl'])) // 2
// console.log(countConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeee','eeeee'])) // ?
// console.log(countConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeee',['e','ee','eee','eeee','eeeee'])) // ?
// console.log((new Date()).toTimeString());

// //console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeee','eeeee'])) // ?