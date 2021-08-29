/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  if (nums.length <= 1) return nums.map(v => v * v);
  let l = 0, r = 1;
  const ans = [];

  // [-4,-1l,1r,3,10]
  // [-4,-1l,0r,3,10]
  // [0l,1r,2,3]
  // [-1l,1r,2,3]
  // [-4, -4l, -3r]
  while (l < r && r < nums.length - 1) {
    if (Math.abs(nums[l]) >= Math.abs(nums[r])) {
      l++;
      r++;
    } else {
      break;
    }
  }

  while (l >= 0 && r < nums.length) {
    if (Math.abs(nums[l]) <= Math.abs(nums[r])) {
      ans.push(nums[l] * nums[l]);
      l--;
    } else {
      ans.push(nums[r] * nums[r]);
      r++;
    }
  }
  while (l >= 0) {
    ans.push(nums[l] * nums[l]);
    l--;
  }
  while (r <= nums.length - 1) {
    ans.push(nums[r] * nums[r]);
    r++;
  }
  return ans;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])) // [0,1,9,16,100]
console.log(sortedSquares([-4,-1,0,3,10]))
console.log(sortedSquares([-4, -4, -3]))