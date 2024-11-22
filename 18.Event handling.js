// event delegation

const a = document.getElementsByClassName("event")[0];

a.addEventListener("click", (e) => {
  if (e.target.style.borderColor === "red") {
    e.target.style.borderColor = "black";
  } else {
    e.target.style.borderColor = "red";
  }
});
