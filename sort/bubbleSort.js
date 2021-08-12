function swap(A, i, j) {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

function selectionSort(A) {
  for (let i = A.length - 1; i >= 0; i--) {
    // 找到0到i之间的最大元素放入最右边的位置A[i]中
    let max = -Infinity;
    let maxIndex = i;

    // 从i到0可以实现稳定排序
    for (let j = 0; j <= i; j++) {
      if (A[j] > max) {
        max = A[j];
        maxIndex = j;
      }
    }
    swap(A, maxIndex, i);
  }
}

function bubbleSort(A) {
  for (let i = A.length - 1; i >= 0; i--) {
    // 找到0到i之间的最大元素放入最右边的位置A[i]中
    let isSorted = true;
    for (let j = 0; j < i; j++) {
      if (A[j] > A[j + 1]) {
        swap(A, j, j + 1);
        isSorted = false;
      }
    }
    if (isSorted) return;
  }
}

function test() {
  const A = [11, 9, 0, 221, 32, 44, 51, 3, 1, 1, 0, 88]
  const A2 = [11, 9, 0, 221, 32, 44, 51, 3, 1, 1, 0, 88]
  selectionSort(A);
  bubbleSort(A2);
  console.log(A)
  console.log(A2)
}
test();