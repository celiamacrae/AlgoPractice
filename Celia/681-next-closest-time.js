const { expect } = require('chai');

/*
681. Next Closest Time

LEETCODE MEDIUM

https://leetcode.com/problems/next-closest-time/

Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.
*/

var nextClosestTime = function(time) {
    
};

describe('nextClosestTime', () => {
    it('Test case 1', () => {
        expect(nextClosestTime("19:34")).to.equal("19:39");
    });
    it('Test case 2', () => {
        expect(nextClosestTime("23:59")).to.equal("22:22");
    });
}); 