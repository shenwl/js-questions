function debounce(fn, delay) {
  let timerId = null;

  return function () {
    timerId = setTimeout((...args) => {
      clearTimeout(timerId);
      fn.apply(this, args);
    }, delay);
  }
}

function throttle(fn, threshold) {
  let start = 0;

  return function (...args) {
    const now = Date.now();
    if (now - start >= threshold) {
      start = now;
      fn.apply(this, args);
    }
  }
}