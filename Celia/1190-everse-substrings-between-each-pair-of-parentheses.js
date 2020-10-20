const { expect } = require('chai');

/*
1190. Reverse Substrings Between Each Pair of Parentheses

LEETCODE MEDIUM

https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/

You are given a string s that consists of lower case English letters and brackets. 

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.
*/

var reverseParentheses = function(s) {

}

describe('reverseParentheses', () => {
    it('Test case 1', () => {
        expect(reverseParentheses("(abcd)")).to.equal("dcba");
    });
    it('Test case 2', () => {
        expect(reverseParentheses("(u(love)i)")).to.equal("iloveu");
    });
    it('Test case 3', () => {
        expect(reverseParentheses("(ed(et(oc))el)")).to.equal("leetcode");
    });
    it('Test case 4', () => {
        expect(reverseParentheses("a(bcdefghijkl(mno)p)q")).to.equal("apmnolkjihgfedcbq");
    });
}); 