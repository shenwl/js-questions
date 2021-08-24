/**
 * 给你一个包含 n 个整数的数组 nums，
 * 判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯解法，leetcode超时
// function equal(arr1, arr2) {
//   if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
//   if (arr1.length !== arr2.length) return;
//   const copy1 = arr1.sort();
//   const copy2 = arr2.sort();
//   for (let i = 0; i < copy1.length; i++) {
//     if (copy1[i] !== copy2[i]) return false;
//   }

//   return true;
// }

// function sum(...args) {
//   return args.reduce((ans, cur) => {
//     return ans + cur;
//   }, 0)
// }
// var threeSum = function (nums) {
//   if (nums.length <= 2) return [];

//   const ans = [];

//   const trace = (indices, end) => {
//     if (end >= nums.length - (3 - indices.length)) return;
//     if (indices.length === 3) {
//       const list = indices.map(i => nums[i]);
//       if (sum(...list) === 0 && !ans.some(arr => equal(arr, list))) {
//         ans.push(list);
//       }
//       return;
//     }

//     for (let i = end + 1; i < nums.length; i++) {
//       trace([...indices, i], i)
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     trace([i], i);
//   }

//   return ans;
// };
var threeSum = function (nums) {
  if (nums.length < 2) return [];

  const sortedNums = [...nums].sort();

  const ans = [];
  for (let i = 0; i < sortedNums.length - 2; i++) {
    const target = sortedNums[i];
    if (target > 0) break;
    if (i > 0 && target === sortedNums[i - 1]) continue;

    let left = i + 1;
    let right = sortedNums.length - 1;

    // 找到left + right + target === 0;
    while (left < right) {
      const sum = sortedNums[left] + sortedNums[right] + target;
      if (sum > 0) {
        right--;

        while (sortedNums[right - 1] === sortedNums[right]) right--;
      } else if (sum < 0) {
        left++;

        while (sortedNums[left + 1] === sortedNums[left]) left++;
      } else {
        ans.push([target, sortedNums[left], sortedNums[right]]);
        left++;
        right--;

        while (sortedNums[left + 1] === sortedNums[left]) left++;
        while (sortedNums[right - 1] === sortedNums[right]) right--;
      }
    }

  }
  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 0, 0])) // [[0,0,0]]
