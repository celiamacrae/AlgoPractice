const { expect } = require('chai');

/*
1557. Minimum Number of Vertices to Reach All Nodes

https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/

Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.

Notice that you can return the vertices in any order.
*/

var findSmallestSetOfVertices = function(n, edges) {  
    let nodes = new Set()
    
    for(let i=0; i<n; i++){
        nodes.add(i)
    }
    
    for(let i=0; i<edges.length; i++){
        nodes.delete(edges[i][1])
    }
    
    return [... nodes]
};

describe('findSmallestSetOfVerticies', () => {
    it('Test case 1', () => {
      expect(findSmallestSetOfVertices(6, [[0,1],[0,2],[2,5],[3,4],[4,2]])).to.deep.equal([0,3]);
    });
    it('Test case 2', () => {
        expect(findSmallestSetOfVertices(5, [[0,1],[2,1],[3,1],[1,4],[2,4]])).to.deep.equal([0,2,3]);
    });
}); 
