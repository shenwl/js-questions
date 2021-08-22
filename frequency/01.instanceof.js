function instanceOf(L, R) {
  const proto = R.prototype;
  let left = L.__proto__;
  while(true) {
    if(left === null) return false;
    if(left === proto) return true;
    left = left.__proto__;
  } 
}

function __test__() {
  console.log(instanceOf({}, Object));
  console.log(instanceOf([], Object));
  console.log(instanceOf([], Array));
  console.log(instanceOf(1, Number));
  console.log(instanceOf(1, String));
  console.log(instanceOf('1', String));
}
__test__()