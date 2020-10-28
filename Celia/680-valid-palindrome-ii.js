const { expect } = require('chai');

/*
680. Valid Palindrome II

LEETCODE EASY

https://leetcode.com/problems/valid-palindrome-ii/

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
*/

var validPalindrome = function(s) {
    let left = 0
    let right = s.length -1
    let skip = false
     
    while(left <= right){
        if(s[left] !== s[right]){
            if(skip === true){
                return false
            }
            if(s[left] === s[right-1] && s[right] === s[left+1]){
                left ++
                right --
            }
            else if(s[left] === s[right-1]){
                right = right -1
                skip = true
            }
            else if(s[right] === s[left+1]){
                left = left +1
                skip = true
            }else{
                return false
            } 
        }else{
            left ++
            right --
        }
        
    }
    return true
};

describe('validPalindrome', () => {
    it('Test case 1', () => {
        expect(validPalindrome("aba")).to.equal(true);
    });
    it('Test case 2', () => {
        expect(validPalindrome("abca")).to.equal(true);
    });
}); 