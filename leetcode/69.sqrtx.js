// /**
//  * 这种解法leetcode会超时
//  * @param {number} x 非负整数
//  * @return {number}
//  */
// var mySqrt = function (x) {
//   if (x < 2) return x;
//   let left = 0;
//   let right = Math.floor(x / 2) + 1;
//   let ans = -1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (mid * mid <= x) {
//       ans = mid;
//       left = mid + 1;
//     } else {
//       right = right - 1;
//     } 
//   }

//   return ans;
// };
/**
 * 牛顿迭代法：
 * 已知f(x) = x^2 - t, f'(x) = 2 * x, f(x0) = 0
 * 求x0
 * 因为：xn+1 = xn - f(xn)/f'(xn)
 * 所以：xn+1 = xn - (xn^2 - t)/(2 * xn)
 * @param {number} x 非负整数
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let x0 = x;
  while (x0 * x0 > x) {
    x0 = Math.floor(x0 - (x0 * x0 - x) / (2 * x0));
  }
  return x0;
};

console.log(mySqrt(8))
console.log(mySqrt(5))
console.log(mySqrt(2147395600))