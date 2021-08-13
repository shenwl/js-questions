function merge(A, l, mid, r) {
  let i = 0, j = 0;
  let index = l;
  // 先把数组拷贝出来
  const arr1 = A.slice(l, mid);
  const arr2 = A.slice(mid, r);

  // 哨兵，减少边界判断
  arr1.push(Infinity);
  arr2.push(Infinity);

  while (index < r) {
    if (arr1[i] <= arr2[j]) {
      A[index] = arr1[i];
      i++;
    } else {
      A[index] = arr2[j];
      j++;
    }
    index++;
  }
}

/**
 * @param {array} A 排序的数组
 * @param {int} l 左索引（闭区间）
 * @param {int} r 右索引（开区间）
 */
function _mergeSort(A, l, r) {
  if (r - l <= 1) return;
  const mid = Math.ceil((l + r)/ 2);
  _mergeSort(A, l, mid);
  _mergeSort(A, mid, r);
  merge(A, l, mid, r);
}

function mergeSort(A) {
  if (!Array.isArray(A) || A.length < 2) return;
  _mergeSort(A, 0, A.length);
}

function test() {
  const A = [11, 9, 0, 221, 32, 44, 51, 3, 1, 1, 0, 88]
  mergeSort(A);
  console.log(A)
}
test();



