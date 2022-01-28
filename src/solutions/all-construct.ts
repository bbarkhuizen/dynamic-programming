/**
 * Write a function that accepts a target string and an array of strings.
 * 
 * The function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating elements of the 'wordbank' array. each element of the 2D array should represent one combination that constructs the 'target'
 */


/**
 * Return all combinations of how the words in wordbank construct target
 *      m = target.length; n = wordbank.length (n^m leaves)
 *      O(n^m) time
 *      O(m) space
 * @param target Target word to create.
 * @param wordbank Bank of words to construct target
 * @returns 2d Array of all combinations
 */
 export function allConstruct(target: string, wordBank : string[]) : string[][] {
    if (target==='') return [[]];

    let result : string[][] = [];
    for(let i = 0; i < wordBank.length; i++){
        if (target.startsWith(wordBank[i])) {            
            let suffix = target.slice(wordBank[i].length); // remove the word from teh target.
            let suffixResult = allConstruct(suffix,wordBank); // get the results of the child call
            let targetResult = suffixResult.map(way => [wordBank[i],...way]); // add the prefix (wordbank[i]) to each element.
            result.push(...targetResult); // push into the final result
        }
    }

    return result;
}

/**
 * Return all combinations of how the words in wordbank construct target
 *      m = target.length; n = wordbank.length
 *      O() time
 *      O() space
 * @param target Target word to create.
 * @param wordbank Bank of words to construct target
 * @returns 2d Array of all combinations
 */
 export function allConstructMemo(target: string, wordBank : string[], memo : any = {}) : string[][] {
     if (target in memo) return memo[target];
    if (target==='') return [[]];

    let result : string[][] = [];
    for(let i = 0; i < wordBank.length; i++){
        if (target.startsWith(wordBank[i])) {            
            let suffix = target.slice(wordBank[i].length); // remove the word from teh target.
            let suffixResult = allConstructMemo(suffix,wordBank,memo); // get the results of the child call
            let targetResult = suffixResult.map(way => [wordBank[i],...way]); // add the prefix (wordbank[i]) to each element.
            result.push(...targetResult); // push into the final result
        }
    }
    memo[target] = result;
    return result;
}

// console.log((new Date()).toTimeString());
// console.log(allConstruct('skateboard',['skate','beard'])) // 0
// console.log(allConstruct('abcdef',['ab','abc','cd','def','abcd','ef','c'])) // 4
// console.log(allConstruct('hello',['h','e','ll','o','hello','he','llo'])) // 5
// console.log(allConstruct('purple',['purp','p','ur','le','purpl'])) // 2
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeee','eeeee'])) // ?
// console.log((new Date()).toTimeString());console.log((new Date()).toTimeString());

// console.log(allConstructMemo('skateboard',['skate','beard'])) // 0
// console.log(allConstructMemo('abcdef',['ab','abc','cd','def','abcd','ef','c'])) // 4
// console.log(allConstructMemo('hello',['h','e','ll','o','hello','he','llo'])) // 5
// console.log(allConstructMemo('purple',['purp','p','ur','le','purpl'])) // 2
// console.log(allConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeee','eeeee'])) // ?
// console.log((new Date()).toTimeString());console.log((new Date()).toTimeString());
