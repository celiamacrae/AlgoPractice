const { expect } = require('chai');

/*
1289. Minimum Falling Path Sum II

LEETCODE HARD

https://leetcode.com/problems/minimum-falling-path-sum-ii/

Given a square grid of integers arr, a falling path with non-zero shifts is a choice of exactly one element from each row of arr, such that no two elements chosen in adjacent rows are in the same column.

Return the minimum sum of a falling path with non-zero shifts.
*/
var minFallingPathSum = function(arr) {

    for(let i=1; i<arr.length; i++){
        let mins = {one: Infinity, two: Infinity}
        for(let j=0; j<arr[0].length; j++){
            if(arr[i-1][j] < mins.one){
                mins.two = mins.one
                mins.one = arr[i-1][j]
            }else if(arr[i-1][j] < mins.two){
                mins.two = arr[i-1][j]
            }
        }
        
        for(let j=0; j<arr[0].length; j++){
            arr[i][j] += arr[i-1][j] === mins.one ? mins.two : mins.one
        }
        
        
    }
    return Math.min(...arr[arr.length -1])
};

describe('minFallingPathSum', () => {
    it('Test case 1', () => {
        expect(minFallingPathSum([[1,2,3],[4,5,6],[7,8,9]])).to.equal(13);
    });
}); 