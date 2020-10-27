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
    
    let start = {}
    let end = {}
    
    for(let i=0; i<s.length; i++){
        if(!start.hasOwnProperty(s[i])){
            start[s[i]] = 0
        }
        if(!end.hasOwnProperty(t[i])){
            end[t[i]] = 0
        }
        end[t[i]] +=1
        start[s[i]] += 1
    }
    
    let startLetters = Object.keys(start)
    let count = 0
    
    for(let i=0; i<startLetters.length; i++){
        let sCount = start[startLetters[i]]
        let eCount = 0
        if(end.hasOwnProperty(startLetters[i])){
            eCount = end[startLetters[i]]
        }
        if(sCount - eCount > 0){
            count += sCount - eCount
        }
    }
    
    return count
    
};

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