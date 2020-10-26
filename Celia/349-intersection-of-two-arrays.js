const { expect } = require('chai');

/*
349. Intersection of Two Arrays

LEETCODE EASY

https://leetcode.com/problems/intersection-of-two-arrays/

Given two arrays, write a function to compute their intersection.
*/

var intersection = function(nums1, nums2) {
    let setA = new Set(nums1)
    let intersect = new Set()
    
    for(let i=0; i<nums2.length; i++){
        if(setA.has(nums2[i])){
            intersect.add(nums2[i])
        }
    }
    
    return [... intersect]
};

describe('intersection', () => {
    it('Test case 1', () => {
        expect(intersection([1,2,2,1], [2,2])).to.deep.equal([2]);
    });
    it('Test case 2', () => {
        expect(intersection([4,9,5], [9,4,9,8,4])).to.deep.equal([9,4]);
    });
}); 