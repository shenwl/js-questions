/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length < 2) return;
  let i = 0, j = 1;
  // examp1: 
  // [0i,1j,0,3,12]
  // [1,0i,0,3j,12]
  // [1,3,0i,0,12j]
  // [1,3,12,0i,0j]
  // examp2: 
  // [4,2,4,0i,0,3,0,5,1,0]
  while (j > i && j < nums.length) {
    if (nums[j] !== 0 && nums[i] === 0) {
      nums[i] = nums[j];
      nums[j] = 0;
    }
    while (nums[i] !== 0 && i < nums.length) { i++ }
    j = i + 1;
    while (nums[j] === 0 && j < nums.length) { j++ }
  }
}

;(() => {
  var a = [4,2,4,0,0,3,0,5,1,0];
  moveZeroes(a);
  console.log(a)
})();