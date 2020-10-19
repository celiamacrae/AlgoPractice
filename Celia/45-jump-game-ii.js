const { expect } = require('chai');

/*
45. Jump Game II

LEETCODE HARD

https://leetcode.com/problems/jump-game-ii/

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.
*/

var jump = function(nums) {
    let targetIdx = nums.length -1 
     let currIdx = 0
     let jumps = 0
     
     while(currIdx < targetIdx){
         if(currIdx + nums[currIdx] >= targetIdx){
             return jumps +1
         }
         let maxMove = 0
         let nextIdx 
         for(let i=1; i<=nums[currIdx]; i++){
             if(nums[currIdx +i] + currIdx + i > maxMove){
                 maxMove = nums[currIdx +i] + currIdx + i
                 nextIdx = i
             }
         }
         currIdx += nextIdx
         jumps++
     }
     
     return jumps 
 };

describe('jump', () => {
    it('Test case 1', () => {
        expect(jump([2,3,1,1,4])).to.equal(2);
    });
}); 