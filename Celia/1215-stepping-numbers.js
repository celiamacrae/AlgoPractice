const { expect } = require('chai');

/*
1215. Stepping Numbers

LEETCODE MEDIUM

https://leetcode.com/problems/stepping-numbers/

A Stepping Number is an integer such that all of its adjacent digits have an absolute difference of exactly 1. For example, 321 is a Stepping Number while 421 is not.

Given two integers low and high, find and return a sorted list of all the Stepping Numbers in the range [low, high] inclusive.
*/

var countSteppingNumbers = function(low, high) {

}

describe('countSteppingNumbers', () => {
    it('Test case 1', () => {
        expect(countSteppingNumbers(0, 21)).to.deep.equal([0,1,2,3,4,5,6,7,8,9,10,12,21]);
    });
}); 