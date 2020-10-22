const { expect } = require('chai');

/*
134. Gas Station

LEETCODE MEDIUM

https://leetcode.com/problems/gas-station/

There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.

Note:

If there exists a solution, it is guaranteed to be unique.
Both input arrays are non-empty and have the same length.
Each element in the input arrays is a non-negative integer.
*/

var canCompleteCircuit = function(gas, cost) {

}


describe('canCompleteCircuit', () => {
    it('Test case 1', () => {
        expect(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])).to.equal(3);
    });
    it('Test case 2', () => {
        expect(canCompleteCircuit([2,3,4], [3,4,3])).to.equal(-1);
    });
}); 
