function curry(fn) {
  if (typeof fn !== 'function') {
    throw Error('fn must be a function!', fn);
  }
  const argTotal = fn.length;
  const recievedArgs = [];

  function result(...args) {
    recievedArgs.push(...args);
    if (recievedArgs.length >= argTotal) {
      return fn.apply(this, recievedArgs);
    } else {
      return result;
    }
  }

  return result();
}

function __test__() {
  function add(a, b, c) {
    return a + b + c;
  }
  const test1 = () => {
    const curryAdd = curry(add);
    curryAdd(1);
    curryAdd(2);
    console.log(curryAdd(3));
  }
  const test2 = () => {
    const curryAdd = curry(add);
    curryAdd(1);
    console.log(curryAdd(2, 3));
  }
  test1();
  test2();
}
__test__();