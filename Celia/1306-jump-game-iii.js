const { expect } = require('chai');

/*
1306. Jump Game III

LEETCODE MEDIUM

https://leetcode.com/problems/jump-game-iii/

Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.

Notice that you can not jump outside of the array at any time.
*/

var canReach = function(arr, start) {

    if(start < 0 || start > arr.length -1){
        return false
    }
    if(arr[start] === 0){
        return true
    }
    if(arr[start] === -1){
        return false
    }
    let temp = arr[start]
    arr[start] = -1
    
    const forward = canReach(arr, start + temp)
    const backward = canReach(arr, start-temp)
    
    return forward || backward
};

describe('canReach', () => {
    it('Test case 1', () => {
        expect(canReach([4,2,3,0,3,1,2], 5)).to.equal(true);
    });
    it('Test case 2', () => {
        expect(canReach([4,2,3,0,3,1,2], 0)).to.equal(true);
    });
    it('Test case 3', () => {
        expect(canReach([3,0,2,1,2], 2)).to.equal(false);
    });
}); 