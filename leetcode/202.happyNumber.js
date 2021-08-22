/**
 * 判断n是否快乐数
 * @description "快乐数"定义为：
  对于一个正整数
  每一次将该数替换为它每个位置上的数字的平方和。
  然后重复这个过程直到这个数变为1，
  也可能是无限循环但始终变不到1。
  如果可以变为1，那么这个数就是快乐数。
 * @param {number} n
 * @returns {bool} 是否快乐数
 */
function isHappy(n) {
  if (n < 0) return false;
  if (n.toString().includes('.')) return false;

  let num = n;

  const bitSquareSum = (num) => {
    return num.toString().split('').reduce((acc, cur) => {
      return acc + (parseInt(cur, 10) * parseInt(cur, 10));
    }, 0);
  }

  let slow = n, fast = n;

  do {
    slow = bitSquareSum(slow);
    fast = bitSquareSum(fast);
    fast = bitSquareSum(fast);
  } while (slow !== fast);

  return slow === 1;
}

function test() {
  console.log(isHappy(19) === true);
  console.log(isHappy(2) === false);
}
test();