function insertionSort(A) {
  for (let i = 1; i < A.length; i++) {
    // 将A[i]插入在卡片0到卡片i之间
    // j代表抓到的牌，先放到最右侧，不断交换到对应位置
    const c = A[i];

    let j = i;
    for (; j > 0 && A[j - 1] > c; j--) {
      A[j] = A[j - 1]
    }
    A[j] = c;
  }
}

function test() {
  const A = [11, 9, 0, 221, 32, 44, 51, 3, 1, 1, 0, 88]
  insertionSort(A);
  console.log(A)
}
test();



