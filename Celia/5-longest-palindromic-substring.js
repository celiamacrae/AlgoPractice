const { expect } = require('chai');

/*
5. Longest Palindromic Substring

LEETCODE MEDIUM

https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, return the longest palindromic substring in s.
*/

var longestPalindrome = function(s) {
    let max = 0
    let start = 0
    let end = 0
    
    for(let i=0; i<s.length; i++){
        let [len1, l1, r1] = subStringPal(s, i)
        let [len2, l2, r2] = subStringPal(s, i, i+1)
        if(len1 > max){
            max = len1
            start = l1
            end = r1
        }
        if(len2 > max){
            max = len2
            start = l2
            end = r2
        }
    }
    
    return s.substring(start, end+1)
    
};

function subStringPal(s, mid1, mid2){
    let len = 1
    let p1 = mid1 -1
    let p2 = mid1 + 1
    if(mid2){
        if(s[mid1] !== s[mid2]){
            return [1, mid1, mid2]
        }
        len = 2
        p2 = mid2 +1
    }
    
    while(p1 >=0 && p2<s.length && s[p1] === s[p2]){
        len +=2
        p1 --
        p2 ++
    }
    
    return [len, p1+1, p2-1]
}

describe('longestPalindrome', () => {
    it('Test case 1', () => {
        expect(longestPalindrome("babad")).to.equal("bab");
    });
    it('Test case 2', () => {
        expect(longestPalindrome("cbbd")).to.equal("bb");
    });
    it('Test case 3', () => {
        expect(longestPalindrome("a")).to.equal("a");
    });
    it('Test case 4', () => {
        expect(longestPalindrome("ac")).to.equal("a");
    });
}); 