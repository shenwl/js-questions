function flatArrayRecursion(arr = []) {
  if (!Array.isArray(arr)) return arr;

  return arr.reduce((result, cur) => {
    return result.concat(Array.isArray(cur) ? flatArrayRecursion(cur) : cur);
  }, []);
}

function __test__() {
  console.log(flatArrayRecursion([1, 2, 3, [4, [6, 7]]]))
}

__test__();