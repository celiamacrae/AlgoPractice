const { expect } = require('chai');

/*
931. Minimum Falling Path Sum

LEETCODE MEDIUM

https://leetcode.com/problems/minimum-falling-path-sum/

Given a square array of integers A, we want the minimum sum of a falling path through A.

A falling path starts at any element in the first row, and chooses one element from each row.  The next row's choice must be in a column that is different from the previous row's column by at most one.
*/

var minFallingPathSum = function(A) {
    for(let i=1; i<A.length; i++){
        for(let j=0; j<A[0].length; j++){
            let min = A[i-1][j]
            if(j > 0 && A[i-1][j-1] < min){
                min = A[i-1][j-1]
            }
            if(j< A[0].length -1 && A[i-1][j+1] < min){
                min = A[i-1][j+1]
            }
            A[i][j] += min
        }
    }
    
    return Math.min(... A[A.length -1])
};

describe('minFallingPathSum', () => {
    it('Test case 1', () => {
        expect(minFallingPathSum([[1,2,3],[4,5,6],[7,8,9]])).to.equal(12);
    });
}); 