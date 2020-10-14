const { expect } = require('chai');

/*
490. The Maze

https://leetcode.com/problems/the-maze/

There is a ball in a maze with empty spaces (represented as 0) and walls (represented as 1). The ball can go through the empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.

Given the maze, the ball's start position and the destination, where start = [startrow, startcol] and destination = [destinationrow, destinationcol], return true if the ball can stop at the destination, otherwise return false.

You may assume that the borders of the maze are all walls (see examples).
*/


var hasPath = function(maze, start, destination) {

    let visited = new Array(maze.length).fill([]).map(arr => {
      return new Array(maze[0].length).fill(0)
    })
  
    return dfs(maze, start, destination, visited)
  };
  
  function dfs(maze, curr, destination, visited){
    let currRow = curr[0]
    let currCol = curr[1]
  
    if(visited[currRow][currCol] === 1){
      return false
    }
    
    visited[currRow][currCol] = 1
  
    if(currRow === destination[0] && currCol === destination[1]){
      return true
    }
  
    let row = currRow
    let col = currCol
  
    while(row >= 0 && maze[row][col] !== 1){
      row --
    }
    const down = dfs(maze, [row+1, col], destination, visited)
  
  
    row = currRow
    while(row < maze.length && maze[row][col] !== 1){
      row ++
    }
    const up = dfs(maze, [row-1, col], destination, visited)
  
    row = currRow
    while(col >= 0 && maze[row][col] !== 1){
      col --
    }
    const left = dfs(maze, [row, col+1], destination, visited)
  
    col = currCol
    while(col < maze[0].length && maze[row][col] !== 1){
      col ++
    }
    const right = dfs(maze, [row, col-1], destination, visited)
  
    return up || down || left || right
  }

describe('hasPath', () => {
    it('Test case 1', () => {
        expect(hasPath([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], [0,4], [4,4])).to.equal(true);
    });
    it('Test case 2', () => {
        expect(hasPath([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], [0,4], [3,2])).to.equal(false);
    });
    it('Test case 3', () => {
      expect(hasPath([[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]], [4,3], [0,1])).to.equal(false);
    });
}); 

