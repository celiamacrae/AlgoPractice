const { expect } = require('chai');

/*
260. Single Number III

LEETCODE MEDIUM

https://leetcode.com/problems/single-number-iii/

Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

Follow up: Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
*/

var singleNumber = function(nums) {
    let ht = {}
    
    for(let i=0; i<nums.length; i++){
        if(! ht.hasOwnProperty(nums[i])){
            ht[nums[i]] = 0
        }
        ht[nums[i]] ++
    }
    
    let res = []
    
    Object.keys(ht).forEach(key => {
        if(ht[key] === 1){
            res.push(parseInt(key))
        }
    })
    return res  
};

describe('singleNumber', () => {
    it('Test case 1', () => {
        expect(singleNumber([1,2,1,3,2,5])).to.deep.equal([3,5]);
    });
    it('Test case 2', () => {
        expect(singleNumber([-1,0])).to.deep.equal([0, -1]);
    });
    it('Test case 3', () => {
        expect(singleNumber([0,1])).to.deep.equal([0,1]);
    });
}); 