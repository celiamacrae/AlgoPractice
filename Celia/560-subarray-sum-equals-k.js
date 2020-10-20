const { expect } = require('chai');

/*
560. Subarray Sum Equals K

LEETCODE MEDIUM

https://leetcode.com/problems/subarray-sum-equals-k/

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
*/

var subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    
    let hashMap = new Map()
    hashMap.set(0, 1) //key = sum / val = count
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (hashMap.has(sum - k)) {
            count += hashMap.get(sum - k)
        }

        if (hashMap.has(sum)) {
            hashMap.set(sum, hashMap.get(sum) + 1)
        } else {
            hashMap.set(sum, 1)
        }
    }
    return count
};

/*

Note: good resource for prefix sum
https://www.youtube.com/watch?v=Ofl4KgFhLsM

*/

describe('subarraySum', () => {
    it('Test case 1', () => {
        expect(subarraySum([1,1,1], 2)).to.equal(2);
    });
}); 