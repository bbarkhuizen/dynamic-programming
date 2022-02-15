/*  Leetcode: https://leetcode.com/problems/string-to-integer-atoi/

    Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

    The algorithm for myAtoi(string s) is as follows:

    1. Read in and ignore any leading whitespace.
    2. Check if the next character (if not already at the end of the string) is '-' or '+'. 
       Read this character in if it is either. This determines if the final result is negative or positive respectively. 
       Assume the result is positive if neither is present.
    3. Read in next the characters until the next non-digit character or the end of the input is reached. 
       The rest of the string is ignored.
    4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). 
       If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
    5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], 
       then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, 
       and integers greater than 231 - 1 should be clamped to 231 - 1.
    6. Return the integer as the final result.
    Note:

    Only the space character ' ' is considered a whitespace character.
    Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
*/

export function stringToInteger(s : string) : number {
    
    const MAX_INT = Math.pow(2,31)-1;
    const MIN_INT = -Math.pow(2,31);
    let index : number = 0;
    let length : number = s.length;
    let sign : number = 1;
    let result : number = 0;
    let digit : number = 0;

    // go past all white space
    while(index < length && s[index] === ' ') {
        index++
    }
    
    // check for sign.
    if (index < length){
        if (s[index] == '-') {
            sign = -1; 
            index++;
        } else if (s[index] == '+') {
            index++;
        };
    }

    while (index < length && s[index] >= '0' && s[index] <= '9') {
        digit = +s[index];
        if ( (result > Math.floor(MAX_INT  / 10)) || 
             (result == Math.floor(MAX_INT / 10) && digit > MAX_INT % 10)) {
            return sign > 0 ? MAX_INT : MIN_INT;
        }
        
        index++;
        result = 10 * result + digit;
    }

    return result > 0 ? result * sign : 0;
    
}

console.log(stringToInteger('2147483648')); // expect 2147483647
console.log(stringToInteger('-2147483649'));// expect -2147483648
//console.log(stringToInteger('  -12'));
//console.log(stringToInteger('  123 Hello'));