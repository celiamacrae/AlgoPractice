const { expect } = require('chai');

/*
1139. Largest 1-Bordered Square

LEETCODE MEDIUM

https://leetcode.com/problems/largest-1-bordered-square/

Given a 2D grid of 0s and 1s, return the number of elements in the largest square subgrid that has all 1s on its border, or 0 if such a subgrid doesn't exist in the grid.
*/

var largest1BorderedSquare = function(grid) {
    let x = grid.length 
    let y = grid[0].length 
    let max = Math.max(x, y)
    
    for(let i=0; i<max; i++){
        let size = max - i
        for(let j=0; j<x - size + 1; j++){
            let startX = j
            for(let k=0; k<y - size + 1; k++){
                let startY = k
                if(checkGrid(grid, startX, startY, size)){
                    return size * size
                }
            }
            
        }
    }
    return 0  
};

function checkGrid(grid, startX, startY, size){
    for(let i=0; i<size; i++){
        if(grid[startX + i][startY] === 0){
            return false
        }
        if(grid[startX][startY+i] === 0){
            return false
        }
        if(grid[startX + i][startY + size -1] === 0){
            return false
        }
        if(grid[startX + size -1][startY +i] === 0){
            return false
        }
    }
    return true 
}

describe('largest1BorderedSquare', () => {
    it('Test case 1', () => {
        expect(largest1BorderedSquare([[1,1,1],[1,0,1],[1,1,1]])).to.equal(9);
    });
    it('Test case 2', () => {
        expect(largest1BorderedSquare([[1,1,0,0]])).to.equal(1);
    });
}); 