function useDebounce(fn, delay) {
  let pastTimeId = null;
  return function (...arg) {
    if (pastTimeId) {
      clearInterval(pastTimeId);
    }
    pastTimeId = setTimeout(() => {
      fn(...arg);
    }, delay);
  };
}

function print() {
  console.log("printing");
}
const bouncePrint = useDebounce(print, 3000);
const ele = document.getElementById("clickme");

ele.onclick = () => {
  bouncePrint();
};
