/*
    The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

    P   A   H   N
    A P L S I I G
    Y   I   R
    And then read line by line: "PAHNAPLSIIGYIR"

    Write the code that will take a string and make this conversion given a number of rows:
*/
export function zigZagConversion(s: string, numRows: number): string {
    if (numRows >= s.length) return s; 
    if (numRows === 1) return s;   
    
    let strings : string[] = new Array<string>(numRows).fill('');
    console.log(strings);

    let down : boolean = false;
    let row = 0;
    for(let char of s) {
        strings[row] += char;
        if (row === 0 || row === numRows-1) down = !down;
        row += down ? 1 : -1;
    }
    
    let result : string = '';
    for(let s of strings) {
        result += s;
    }
    
    return result;
};

// PAYPALISHIRING 3
// PAHNAPLSIIGYIR
console.log(zigZagConversion('AB',1));
