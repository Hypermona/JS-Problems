function useThrottle(fn, delay) {
  // return a trottled function
  let prevTimeoutId = null;
  let prevTime = null;
  return function (...args) {
    // for the 1st request exacute the function and set time = current time.
    // for the subsequesnt request if it has time then call a setTimeOut by subtracting the passed time from delay and set time to current time.
    // before that clear any existing timeouts
    if (!prevTime) {
      fn(...args);
      prevTime = Date.now();
    } else {
      clearTimeout(prevTimeoutId);
      prevTimeoutId = setTimeout(() => {
        fn(...args);
        prevTime = Date.now();
      }, delay - (Date.now() - prevTime));
    }
  };
}
const box = document.getElementById("box");
box.style.width = `${window.innerWidth / 2}px`;

function resize() {
  box.style.width = `${window.innerWidth / 2}px`;
  console.log("resie called");
}
const newResize = useThrottle(resize, 3000);

window.addEventListener("resize", newResize);
