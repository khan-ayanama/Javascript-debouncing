const btn = document.querySelector(".btn");

// function trailDebounce(func, delay) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.call(this, ...args);
//     }, delay);
//   };
// }

// function leadingDebounce(func, delay) {
//   let timeoutId = null;
//   return function (...args) {
//     if (timeoutId === null) {
//       func.call(this, ...args);
//     }
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       timeoutId = null;
//     }, delay);
//   };
// }

function debounce(func, delay, option = { leading: false, trailing: true }) {
  let timeoutId = null;
  return function (...args) {
    let isInvoked = false;
    if (timeoutId === null && option.leading) {
      func.call(this, ...args);
      isInvoked = true;
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (option.trailing && !isInvoked) {
        func.call(this, ...args);
      }
      timeoutId = null;
    }, delay);
  };
}

function hello() {
  console.log("you called hello function!!!");
}

// btn.addEventListener("click", trailDebounce(hello, 300));
// btn.addEventListener("click", leadingDebounce(hello, 300));
btn.addEventListener(
  "click",
  debounce(hello, 300, (option = { leading: true, trailing: true }))
);
