/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 0, r = n, mid;

    while (l <= r) {
      mid = Math.floor((l + r) / 2);
      next = mid + 1;
      prev = mid - 1;
      if (isBadVersion(mid)) {
        if (!isBadVersion(prev)) return mid;
        r = prev;
      } else {
        if (isBadVersion(next)) return next;
        l = next;
      }
    }

    return -1;
  };
};