var binarySearch = function (nums, target) {
  let l = 0, r = nums.length - 1, mid;

  while (r >= l) {
    mid = Math.floor((l + r) / 2);

    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9))
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2))
console.log(binarySearch([5], 5))
console.log(binarySearch([2, 5], 5))