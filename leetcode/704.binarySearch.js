var binarySearch = function (nums, target) {
  let l = 0, r = nums.length - 1;

  while (r > l) {
    let mid = Math.floor((l + r) / 2);

    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      l = mid;
    } else {
      r = mid;
    }
  }
  return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9))