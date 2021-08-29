/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0, r = nums.length - 1, mid;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) return mid;

    if (target < nums[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return l > r ? l : r;
};

console.log(searchInsert([1, 3, 5, 6], 5)) // 2
console.log(searchInsert([1, 3, 5, 6], 2)) // 1
console.log(searchInsert([1, 3, 5, 6], 7)) // 4
console.log(searchInsert([1, 3, 5, 6], 0)) // 0
console.log(searchInsert([1, 3], 2)) // 1
console.log(searchInsert([1, 3, 5], 4)) // 2