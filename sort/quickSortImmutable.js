
function _quickSort(A) {
  if (A.length <= 1) return A;
  // |--left--|--pivot--|--right--|
  const pivot = A[0];
  let left = [];
  let mid = [];
  let right = [];
  A.forEach(n => {
    if (n > pivot) {
      return right.push(n);
    }
    if(n === pivot) {
      return mid.push(n);
    }
    left.push(n);
  });
  left = _quickSort(left);
  right = _quickSort(right);

  left.push(...mid, ...right);
  return left;
}

function quickSort(A) {
  if (!Array.isArray(A) || A.length <= 1) return A;
  return _quickSort(A);
}

function test() {
  const A = [11, 9, 0, 221, 32, 44, 51, 3, 1, 1, 0, 88]
  console.log(quickSort(A))
}
test();



