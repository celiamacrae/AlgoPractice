const { expect } = require('chai');

/*
286. Walls and Gates

LEETCODE MEDIUM

https://leetcode.com/problems/walls-and-gates/

You are given a m x n 2D grid initialized with these three possible values.

1. -1 - A wall or an obstacle.
2. 0 - A gate.
3. INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.

Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.
*/

function wallsAndGates(rooms) {
  if (rooms === null || rooms.length === 0 || rooms[0].length === 0) return rooms

  const queue = []

  for (let i = 0; i < rooms.length; i++) {
      for (let j = 0; j < rooms[0].length; j++) {
          if(rooms[i][j] === 0) {
              queue.push([i,j])
          }
      }
  }

  const directions = [[0,1], [0, -1], [1, 0], [-1, 0]]

  while (queue.length > 0) {
      const currCell = queue.shift()
      const currRow = currCell[0]
      const currCol = currCell[1]
      for (let dirIdx = 0; dirIdx < directions.length; dirIdx++) {
          const nextRow = currRow + directions[dirIdx][0]
          const nextCol = currCol + directions[dirIdx][1]
          if(nextRow < 0 || nextCol < 0 || nextRow >= rooms.length || nextCol >= rooms[0].length || rooms[nextRow][nextCol] < Infinity) {
              continue;
          }
          rooms[nextRow][nextCol] = rooms[currRow][currCol] + 1
          queue.push([nextRow, nextCol])
      }

  }
  return rooms;
}

describe('wallsAndGates', () => {
  it('Test case 1', () => {
      expect(wallsAndGates([[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]])).to.equal(
        [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]);
  });
});
