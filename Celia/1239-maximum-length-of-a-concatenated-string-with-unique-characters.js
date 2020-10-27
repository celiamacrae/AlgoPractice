const { expect } = require('chai');

/*
1239. Maximum Length of a Concatenated String with Unique Characters

LEETCODE MEDIUM

https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

Return the maximum possible length of s.
*/

var maxLength = function(arr) {

}

describe('maxLength', () => {
    it('Test case 1', () => {
        expect(maxLength(["un","iq","ue"])).to.equal(4);
    });
    it('Test case 2', () => {
        expect(maxLength(["cha","r","act","ers"])).to.equal(6);
    });
    it('Test case 3', () => {
        expect(maxLength(["abcdefghijklmnopqrstuvwxyz"])).to.equal(26);
    });
}); 