const { expect } = require('chai');

/*
973. K Closest Points to Origin

LEETCODE MEDIUM

https://leetcode.com/problems/k-closest-points-to-origin/

We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)
*/

var kClosest = function(points, K) {
    points.sort((a,b) => {
        return (a[0]**2 + a[1] **2) - (b[0]**2 + b[1]**2)
    })
    
    return points.slice(0, K)
};

describe('kClosest', () => {
    it('Test case 1', () => {
        expect(kClosest([[1,3],[-2,2]], 1)).to.deep.equal([[-2,2]]);
    });
    it('Test case 2', () => {
        expect(kClosest([[3,3],[5,-1],[-2,4]], 2)).to.deep.equal([[3,3],[-2,4]]);
    });
}); 