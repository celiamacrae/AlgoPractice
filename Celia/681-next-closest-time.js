const { expect } = require('chai');

/*
681. Next Closest Time

LEETCODE MEDIUM

https://leetcode.com/problems/next-closest-time/

Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.
*/

var nextClosestTime = function(time) {
    let diff = Infinity
    let res = ''
    let nums = new Set()
    nums.add(+ time.substring(0,1))
    nums.add(+ time.substring(1,2))
    nums.add(+ time.substring(3,4))
    nums.add(+ time.substring(4,5))

    if(nums.size === 1){
        return time
    }

    let digits = Array.from(nums)

    let minutes = (+ time.substring(0,2)) * 60 + (+ time.substring(3,5))

    dfs(digits, '', 0, minutes)

    function dfs(digits, current, pos, target){
        if(pos === 4){
            let minute = (+ current.substring(0, 2) * 60 + (+ current.substring(2, 4)));
            if(minute === target){
                return
            }
            let d = minute - target > 0 ? minute - target : 1440 + minute - target
            if(d < diff){
                diff = d
                result = current.substring(0, 2) + ':' + current.substring(2, 4);
            }
            return
        }

        for(let i=0; i<digits.length; i++){
            if(pos === 0 && digits[i] > 2){
                continue
            }
            if(pos === 1 && +current * 10 + digits[i] > 23){
                continue
            }
            if(pos === 2 && digits[i] > 5){
                continue
            }
            if(pos === 3 && +(current.substring(2)) * 10 + digits[i] > 59){
                continue
            }
            dfs(digits, current + digits[i], pos + 1, target);
        }

    }

    return result
};

describe('nextClosestTime', () => {
    it('Test case 1', () => {
        expect(nextClosestTime("19:34")).to.equal("19:39");
    });
    it('Test case 2', () => {
        expect(nextClosestTime("23:59")).to.equal("22:22");
    });
}); 