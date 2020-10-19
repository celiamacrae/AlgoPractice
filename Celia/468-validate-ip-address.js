const { expect } = require('chai');

/*
468. Validate IP Address

LEETCODE MEDIUM

https://leetcode.com/problems/validate-ip-address/

Given a string IP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.

A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros. For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses but "192.168.01.1", while "192.168.1.00" and "192.168@1.1" are invalid IPv4 addresses.

A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:

1 <= xi.length <= 4
xi is a hexadecimal string which may contain digits, lower-case English letter ('a' to 'f') and upper-case English letters ('A' to 'F').
Leading zeros are allowed in xi.
For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and "2001:db8:85a3:0:0:8A2E:0370:7334" are valid IPv6 addresses, while "2001:0db8:85a3::8A2E:037j:7334" and "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses.
*/

var validIPAddress = function(IP) {
    if(isIPv4(IP)){
        return 'IPv4'
    }
    else if(isIPv6(IP)){
        return 'IPv6'
    }else{
        return 'Neither'
    }
    
};

function isIPv4(IP){
    let nums = IP.split('.')
    if(nums.length !== 4){
        return false
    }
    for(let i=0; i<nums.length; i++){
        if(nums[i][0] == 0 && nums[i].length > 1){
            return false
        }
        if(parseInt(nums[i]) != nums[i]){
            return false
        }
        if(0 > parseInt(nums[i]) || parseInt(nums[i]) > 255){
            return false   
        }
    }
    return true
}

function isIPv6(IP){
    let hex = new Set('abcdefABCDEF01234567890')
    let nums = IP.split(':')
    if(nums.length !== 8){
        return false
    }
    for(let i=0; i<nums.length; i++){
        if(nums[i].length > 4 || nums[i].length < 1){
            console.log(nums[i])
            return false
        }
        for(let j=0; j<nums[i].length; j++){
            if(! hex.has(nums[i][j])){
                return false
            }
        }
    }
    return true
}

describe('validIPAddress', () => {
    it('Test case 1', () => {
        expect(validIPAddress("172.16.254.1")).to.equal("IPv4");
    });
    it('Test case 2', () => {
        expect(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334")).to.equal("IPv6");
    });
    it('Test case 3', () => {
        expect(validIPAddress("256.256.256.256")).to.equal("Neither");
    });
    it('Test case 4', () => {
        expect(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334:")).to.equal("Neither");
    });
    it('Test case 5', () => {
        expect(validIPAddress("1e1.4.5.6")).to.equal("Neither");
    });
}); 