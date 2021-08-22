function addString(num1, num2) {
  const nums1 = num1.split('').map(n => parseInt(n, 10));
  const nums2 = num2.split('').map(n => parseInt(n, 10));
  while (nums1.length < nums2.length) {
    nums1.unshift(0);
  }
  while (nums2.length < nums1.length) {
    nums2.unshift(0);
  }

  let carry = 0;
  for (let i = nums1.length - 1; i >= 0; i--) {
    const sum = nums1[i] + nums2[i] + carry;
    if (sum > 9) {
      carry = 1;
      nums1[i] = sum % 10;
    } else {
      carry = 0;
      nums1[i] = sum;
    }
  }
  if (carry > 0) {
    nums1.unshift(1);
  }
  return nums1.join('');
}

function __test__() {
  console.log(addString('111', '222')) // 333
  console.log(addString('1110', '222')) // 1332
  console.log(addString('91', '9')) // 100
}

__test__();