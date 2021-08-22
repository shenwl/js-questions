/**
 * @param {number} columnNumber
 * @return {string}
 * 描述：10进制转字母26进制
  A -> 1
  B -> 2
  C -> 3
  ...
  Z -> 26
  AA -> 27
  AB -> 28 
 */
function convertToTitle(columnNumber) {
  if (columnNumber < 1) return '';
  /**
   * @param {number} num 1-26
   * @returns {string} A-Z
   */
  const numToLetter = num => {
    return String.fromCharCode('A'.charCodeAt() + num - 1);
  }

  let result = [];
  let carry = columnNumber;

  while (carry > 26) {
    result.unshift(numToLetter(carry % 26));
    carry = parseInt(carry / 26, 10)
  }
  if (carry > 0) {
    result.unshift(numToLetter(carry));
  }
  return result.join('');
};

; (function () {
  console.log(convertToTitle(1) === 'A');
  console.log(convertToTitle(26) === 'Z');
  console.log(convertToTitle(1) === 'A');
  console.log(convertToTitle(27) === 'AA');
  console.log(convertToTitle(701) === 'ZY');
})();