function deepClone(target) {
  if (typeof target === 'object') {
    // @todo: 处理Date, Reg...之类的对象
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let k in target) {
      cloneTarget[k] = deepClone(target[k]);
    }
    return cloneTarget;
  }
  return target;
}