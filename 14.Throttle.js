function useThrottle(fn, delay) {
  let prevTimeoutId = null;
  let prevTime = null;
  return function (...args) {
    if (!prevTime) {
      fn(...args);
      prevTime = Date.now();
    } else {
      if (prevTimeoutId) {
        clearTimeout(prevTimeoutId);
      }
      prevTimeoutId = setTimeout(() => {
        fn(...args);
        prevTime = 0;
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
