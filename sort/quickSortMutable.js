
function swap(A, i, j) {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

function partition(A, l, r) {
  const pivot = A[l];
  // pivot|<pivot的值|不能确定的|>=pivot的
  // |pivot|(i)--left--|--mid--|--right--|(j)
  // 加1/减1法进步，每次进步< or >=pivot的+1，不能确定的-1, 一直到mid为空
  let i = l + 1;
  let j = r; // j是开区间

  while (i !== j) {
    if (A[i] < pivot) {
      i++;
    } else {
      j--;
      swap(A, i, j);
    }
  }
  swap(A, i - 1, l);
  return i - 1;
}

function _quickSort(A, l, r) {
  if (r - l <= 2) return;
  // 选择最左边的元素构造子问题集合
  // 小于pivot的放左边，大于的放右边
  // i代表pivot的位置
  const i = partition(A, l, r);

  // 省略计算pivot所在的位置i
  // 将所有小于pivot的元素放到左边，大于pivot的元素放到右边
  _quickSort(A, l, i);
  _quickSort(A, i + i, r);
}

function quickSort(A) {
  if (!Array.isArray(A) || A.length <= 1) return;
  _quickSort(A, 0, A.length);
}

function test() {
  const A = [11, 9, 0, 221, 32, 44, 51, 3, 1, 1, 0, 88]
  quickSort(A);
  console.log(A);
}
test();



