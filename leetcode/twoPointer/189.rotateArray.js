/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // [1, 2, 3, 4, (5, 6, 7)] 3
  // [(5, 6, 7), (1, 2, 3, 4)]
  if (nums.length < 2) return;
  k = k % nums.length;
  function reverse(nums, start, end) {
    if (start >= end) return;
    let l = start, r = end;
    while (l < r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    }
  }
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
};


const testNums = [1, 2, 3, 4, 5, 6, 7]
rotate(testNums, 3)
console.log(testNums) // [5, 6, 7, 1, 2, 3, 4]