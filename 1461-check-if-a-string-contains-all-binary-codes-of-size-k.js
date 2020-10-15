const { expect } = require('chai');

/*
1461. Check If a String Contains All Binary Codes of Size K

LEETCODE MEDIUM

https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/

Given a binary string s and an integer k.

Return True if every binary code of length k is a substring of s. Otherwise, return False.
*/

var hasAllCodes = function(s, k) {
    
};

describe('hasAllCodes', () => {
    it('Test case 1', () => {
        expect(hasAllCodes("00110110", 2)).to.equal(true);
    });
    it('Test case 2', () => {
        expect(hasAllCodes("00110", 2)).to.equal(true);
    });
    it('Test case 3', () => {
        expect(hasAllCodes("0110", 1)).to.equal(true);
    });
    it('Test case 4', () => {
        expect(hasAllCodes("0110", 2)).to.equal(false);
    });
    it('Test case 5', () => {
        expect(hasAllCodes("0000000001011100", 4)).to.equal(false);
    });
}); 