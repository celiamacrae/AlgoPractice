const { expect } = require('chai');

/*
1347. Minimum Number of Steps to Make Two Strings Anagram

LEETCODE MEDIUM

https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/

Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.
*/
var minSteps = function(s, t) {

}

describe('minSteps', () => {
    it('Test case 1', () => {
        expect(minSteps("bab", "aba")).to.equal(1);
    });
    it('Test case 2', () => {
        expect(minSteps("leetcode", "practice")).to.equal(5);
    });
    it('Test case 3', () => {
        expect(minSteps("anagram", "mangaar")).to.equal(0);
    });
    it('Test case 4', () => {
        expect(minSteps("xxyyzz", "xxyyzz")).to.equal(0);
    });
    it('Test case 5', () => {
        expect(minSteps("friend", "family")).to.equal(4);
    });
}); 