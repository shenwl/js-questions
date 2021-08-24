/**
 * 给你一个包含 n 个整数的数组 nums，
 * 判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  const ans = [];

  const trace = (indices, end) => {
    if (end >= nums.length) return;
    if (indices.length === 3) {
      const list = indices.map(i => nums[i]);
      if (sum(...list) === 0 && !ans.some(arr => equal(arr, list))) {
        ans.push(list);
      }
      return;
    }
    for (let i = end + 1; i < nums.length; i++) {
      trace([...indices, i], i)
    }
  }

  for (let i = 0; i < nums.length - 3; i++) {
    trace([i], i)
  }

  return ans;
};

function equal(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  if (arr1.length !== arr2.length) return;

  return JSON.stringify([...arr1].sort()) === JSON.stringify([...arr2].sort());
}

function sum(...args) {
  return args.reduce((ans, cur) => {
    return ans + cur;
  }, 0)
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1,-1,2],[-1,0,1]]