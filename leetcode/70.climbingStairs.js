/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 3) return n;
  // fn = fn-1 + fn-2
  let f3 = 3, f2 = 2, f1 = 1;
  while (n > 3) {
    f1 = f2;
    f2 = f3;
    f3 = f1 + f2;
    n--;
  }
  return f3;
};

console.log(climbStairs(4))