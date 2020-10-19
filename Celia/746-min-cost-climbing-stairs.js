const { expect } = require('chai');

/*
746. Min Cost Climbing Stairs

LEETCODE EASY

https://leetcode.com/problems/min-cost-climbing-stairs/

On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.
*/

var minCostClimbingStairs = function(cost) {
    let f1 = 0
    let f2 = 0
    
    for(let i=0; i<cost.length; i++){
        let f0 = cost[i] + Math.min(f1, f2)
        f2 = f1
        f1 = f0
    }
    return Math.min(f1, f2)
};

describe('minCostClimbingStairs', () => {
    it('Test case 1', () => {
        expect(minCostClimbingStairs([10, 15, 20])).to.equal(15);
    });
    it('Test case 2', () => {
        expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).to.equal(6);
    });
}); 