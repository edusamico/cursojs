/**
 * @param {number[]} nums
 * @return {number}
 */
 
 var removeDuplicates = function(nums) {
    let i = 0
    while (i < nums.length) {
        if (nums[i] === nums[i + 1]) {
           nums.splice([i + 1], 1);
        } else {
             i++;
        }
    }
console.log (nums);
};

let nums = [-2, -2, -1, 0, 2, 4, 4, 5, 8, 8, 8, 8, 8, 10, 10, 11];
removeDuplicates(nums);