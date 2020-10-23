const { expect } = require('chai');

/*
43. Multiply Strings

LEETCODE MEDIUM

https://leetcode.com/problems/multiply-strings/

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

var multiply = function(num1, num2) {

}

describe('multiply', () => {
    it('Test case 1', () => {
        expect(multiply('2','3')).to.equal('6');
    });
    it('Test case 2', () => {
        expect(multiply('123', '456')).to.equal('56088');
    });
    it('Test case 3', () => {
        expect(multiply('0', '9')).to.equal('0');
    });
}); 