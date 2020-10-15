const { expect } = require('chai');

/*
848. Shifting Letters

LEETCODE MEDIUM

https://leetcode.com/problems/shifting-letters/

We have a string S of lowercase letters, and an integer array shifts.

Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a'). 

For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.

Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.

Return the final string after all such shifts to S are applied.
*/

var shiftingLetters = function(S, shifts) {
    let a = 'a'.charCodeAt(0)
    let z = 'z'.charCodeAt(0) - a + 1
    
    for(let i=shifts.length -2; i>=0; i--){
        shifts[i] = shifts[i] + shifts[i+1]
    }

    let output = ''
    
    for(let i=0; i<S.length; i++){
        let code = S.charCodeAt(i) - a +shifts[i]
        output += String.fromCharCode(code % z + a)
    }
    return output
};

describe('shiftingLetters', () => {
    it('Test case 1', () => {
        expect(shiftingLetters("abc", [3,5,9])).to.equal("rpl");
    });
}); 