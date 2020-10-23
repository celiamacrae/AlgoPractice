const { expect } = require('chai');

/*
1353. Maximum Number of Events That Can Be Attended

LEETCODE MEDIUM

https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/

Given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi.

You can attend an event i at any day d where startTimei <= d <= endTimei. Notice that you can only attend one event at any time d.

Return the maximum number of events you can attend.
*/

var maxEvents = function(events) {
    let visited = {}

    events.sort((a,b) => {
        if(a[1] != b[1]){
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })

    let res = 0

    for(let i=0; i<events.length; i++){
        let event = events[i]
        let start = event[0]
        let end = event[1]

        for(let j=start; j<=end; j++){
            if(! visited.hasOwnProperty(j)){
                visited[j] = true
                res ++
                break;
            }
        }
    }

    return res
};

describe('maxEvents', () => {
    it('Test case 1', () => {
        expect(maxEvents([[1,2],[2,3],[3,4]])).to.equal(3);
    });
    it('Test case 2', () => {
        expect(maxEvents([[1,2],[2,3],[3,4],[1,2]])).to.equal(4);
    });
    it('Test case 3', () => {
        expect(maxEvents([[1,4],[4,4],[2,2],[3,4],[1,1]])).to.equal(4);
    });
    it('Test case 4', () => {
        expect(maxEvents([[1,100000]])).to.equal(1);
    });
    it('Test case 5', () => {
        expect(maxEvents([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]])).to.equal(7);
    });
}); 