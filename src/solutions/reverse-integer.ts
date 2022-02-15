/*

 good working solution: https://codybonney.com/leetcode-reverse-integer-solution-using-typescript/
*/

export function reverseInteger(x : number) : number {
    
    let num = Math.abs(x);
    if (num < 10) return x;

    let result : number = 0;
    let digit : number = 0;


    while(num >= 10) {
        digit = num % 10;
        num = Math.floor(num / 10);
        result = (result + digit) * 10;
    }

    result = (result + num);

    if (result > 2**31) {
        result = 0;
    } else result *= Math.sign(x);

    return result;

}

console.log(reverseInteger(-1));
console.log(reverseInteger(1));
console.log(reverseInteger(12));
console.log(reverseInteger(10));
console.log(reverseInteger(-12));
console.log(reverseInteger(123));
console.log(reverseInteger(1534236469));

