/**
 * 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) return s;
  let maxLen = 1;
  let begin = 0;

  // ababa
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (j - i + 1 > maxLen && validPalindrome(s, i, j)) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.slice(begin, begin + maxLen)
};

function validPalindrome(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
}