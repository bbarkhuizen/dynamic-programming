/*
    Given a string s, return the longest palindromic substring in s.

    Example 1:
        Input: s = "babad"
        Output: "bab"
        Explanation: "aba" is also a valid answer.

    Example 2:
        Input: s = "cbbd"
        Output: "bb"


*/

// abc-abcba-abccba-cba

/**
 * Find the longest palindrome in the string
 * @param s string to analyze
 * @returns longest palindrome
 */
export function longestPalindrome(s : string) : string {
   
    let longest : string = '';
    for (let i = 0; i<s.length;i++){
        let longestMiddle = longestPalindromeFromIndex(s,i);
        let longestSaddle = longestPalindromeFromIndex(s,i,i+1);
        longest = longest.length > longestMiddle.length ? longest : longestMiddle;
        longest = longest.length > longestSaddle.length ? longest : longestSaddle;
        //console.log(`longestMiddle: ${longestMiddle}; longestSaddle: ${longestSaddle}; longest: ${longest}`);
    }
    return longest;
   
    function longestPalindromeFromIndex(s : string, i1 : number, i2 : number = i1) : string {
        if (i1 < 0 || i2 < 0) return ''; // if they are less than 0 then invalid check.
        if (i1 >= s.length || i2 >= s.length) return ''; // if either is greater than the amount of characters then invalid check.
        let longest : string = '';
        if (i1 != i2) {
            if (Math.abs(i1-i2) != 1) return ''; // if they are too far apart then not a valid check.
            if (s[i1] !== s[i2]) return ''; // if they are apart then 
            longest = s[i1] + s[i2]; // 
        } else {
            longest = s[i1];
        }
        // now we are ready to travel.
        for (let index1 = i1-1, index2 = i2+1; index1 >= 0 && index2 < s.length; index1--, index2++) {
            if (s[index1] === s[index2]) {
                longest = s[index1] + longest + s[index2];
            } else return longest;
            
        }
        return longest;
    }
    
}


// A B B A

console.log(longestPalindrome('abcddcbaabcdcba')); // abcdcba