
export function lengthOfLongestSubstring(s : string) : number {
    if (s.length === 0) return 0;    
    if (s.length === 1) return 1;

    let h : string[] = []
    for (let i = 0; i < s.length; i++) {
        if (h.indexOf(s[i]) >= 0){
            if (i < s.length-1) {
                let nl = lengthOfLongestSubstring(s.slice(1));
                return nl > i ? nl : i;
            }
            return i;
        } 
        h.push(s[i]);       
    }
    return s.length;
}

/**
 * found: https://codybonney.com/leetcode-longest-substring-without-repeating-characters-solution-typescript/
 * @param s string to test
 * @returns max sub string length
 */
function lengthOfLongestSubstringOptimal(s: string): number {
    // map a character to its index in the array
    let map: Map<string, number> = new Map([]);
    let longest = 0; // longest substring found
    let length = 0; // length of the substring currently being calculated

    for(let i = 0; i < s.length; i++) {   
        console.log(`processing [i: ${i}; s[i]: ${s[i]}]`);
        const encountered = map.get(s[i]);
        console.log('encountered:',encountered)
        if (encountered === undefined) {
            length += 1;
        } else {
            length = Math.min(i - encountered, length + 1);
        }
        console.log('length:',length)
        longest = Math.max(longest, length);
        console.log('longest:',longest)
        map.set(s[i], i);
        console.log(map);
    }
    return longest;
}

const s = 'pwwkew'
console.log(s);
console.log(lengthOfLongestSubstringOptimal(s)); // 3