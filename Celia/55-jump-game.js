const { expect } = require('chai');

/*
55. Jump Game

LEETCODE MEDIUM

https://leetcode.com/problems/jump-game/

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.
*/

var canJump = function(nums) {
    let target = nums.length -1
    for(let i= nums.length -1; i>=0; i--){
        if(i + nums[i] >= target){
            target = i
        }
    }
    return target === 0
};

describe('canJump', () => {
    it('Test case 1', () => {
        expect(canJump([2,3,1,1,4])).to.equal(true);
    });
    it('Test case 2', () => {
        expect(canJump([3,2,1,0,4])).to.equal(false);
    });
}); 