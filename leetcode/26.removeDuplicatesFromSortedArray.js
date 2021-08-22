var removeDuplicates = function (nums) {
  if (nums.length < 2) return nums.length;
  let l = 0;

  // [1L,2R,2,3,4,4,5]
  // [1,2L,2R,3,4,4,5]
  // [1,2,3L,3R,4,4,5]
  // [1,2,3,4L,4R,4,5]
  for (let r = 1; r < nums.length; r++) {
    if (nums[r] != nums[l]) {
      l++;
      nums[l] = nums[r]
    }
  }
  return l + 1;
};