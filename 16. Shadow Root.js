//It is the root of the shadow element

const anyEle = document.getElementsByClassName("any1")[0];
const videoEle = document.getElementsByTagName("video")[0];
const d_c = document.getElementsByName("d");

console.log(anyEle.shadowRoot, videoEle.shadowRoot);
