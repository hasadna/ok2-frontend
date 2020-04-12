// export function debounce(fn, delay) {
//   var timeoutID = null
//   return function () {
//     clearTimeout(timeoutID)
//     var args = arguments
//     var that = this
//     timeoutID = setTimeout(function () {
//       fn.apply(that, args)
//     }, delay)
//   }
// }

export function throttle(fn: Function, wait: number) {
  let isCalled = false;
  return function (...args: any) {
    if (!isCalled) {
      fn(...args);
      isCalled = true;
      setTimeout(() => {
        isCalled = false;
      }, wait);
    }
  };
}
