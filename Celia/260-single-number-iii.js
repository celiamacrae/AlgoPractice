const { expect } = require('chai');

/*
260. Single Number III

LEETCODE MEDIUM

https://leetcode.com/problems/single-number-iii/

Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

Follow up: Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
*/

var singleNumber = function(nums) {

}

describe('singleNumber', () => {
    it('Test case 1', () => {
        expect(singleNumber([1,2,1,3,2,5])).to.deep.equal([3,5]);
    });
    it('Test case 2', () => {
        expect(singleNumber([-1,0])).to.deep.equal([-1,0]);
    });
    it('Test case 3', () => {
        expect(singleNumber([0,1])).to.deep.equal([1,0]);
    });
}); 