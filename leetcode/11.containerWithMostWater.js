/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function (heights) {
  if (heights.length < 2) return 0;
  let left = 0, right = heights.length - 1;

  let ans = Math.min(heights[left], heights[right]) * (right - left);

  while (left < right) {
    const boundary = Math.min(heights[left], heights[right]);

    if (heights[left] <= heights[right]) {
      ans = Math.max(ans, boundary * (right - left));
      const leftBoundary = heights[left];
      while (heights[left] <= leftBoundary) {
        left += 1;
      }
    } else {
      ans = Math.max(ans, boundary * (right - left));
      const rightBoundary = heights[right];
      while (heights[right] <= rightBoundary) {
        right -= 1;
      }
    }
  }

  return ans;
};