const { expect } = require('chai');

/*
680. Valid Palindrome II

LEETCODE EASY

https://leetcode.com/problems/valid-palindrome-ii/

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
*/

var validPalindrome = function(s) {

}

describe('validPalindrome', () => {
    it('Test case 1', () => {
        expect(validPalindrome("aba")).to.equal(true);
    });
    it('Test case 2', () => {
        expect(validPalindrome("abca")).to.equal(true);
    });
}); 