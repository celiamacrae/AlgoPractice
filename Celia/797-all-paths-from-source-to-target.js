const { expect } = require('chai');

/*
797. All Paths From Source to Target

LEETCODE MEDIUM

https://leetcode.com/problems/all-paths-from-source-to-target/

Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1, and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).
*/

var allPathsSourceTarget = function(graph) {
    const N = graph.length, result = [];
    
    function callDFS(node, arr) {
        if(node === N-1) {
            result.push([...arr, node])
            return;
        }
        
        for(let next of graph[node]) {
            callDFS(next, [...arr, node]);
        }
    }
    
    callDFS(0, []);
    return result;
};

describe('allPathsSourceTarget', () => {
    it('Test case 1', () => {
        expect(allPathsSourceTarget([[1,2],[3],[3],[]])).to.deep.equal([[0,1,3],[0,2,3]]);
    });
    it('Test case 2', () => {
        expect(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]])).to.deep.equal([[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]);
    });
}); 