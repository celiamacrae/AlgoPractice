const { expect } = require('chai');

/*
437. Path Sum III

LEETCODE MEDIUM

https://leetcode.com/problems/path-sum-iii/

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.
*/

var pathSum = function(root, sum) {
    
    let paths = 0
    
    bfs(root, [])
    
    function bfs(root, currSums){
        if(root === null){
            return 
        }
        if(root.val === sum){
            paths ++
        }
        let nextSum = [root.val]
        for(let i=0; i<currSums.length; i++){
            let next = currSums[i] + root.val
            if(next === sum){
                paths ++
            }
            
            nextSum.push(next)  
             
        }
        
        bfs(root.left, nextSum)
        bfs(root.right, nextSum)  
    }
    
    return paths
};