function myGetElementByClassName(className) {
  function find(element, className) {
    let res = [];
    if (element?.classList?.contains(className)) {
      res.push(element);
    }
    for (let i of element?.children) {
      res = res.concat(find(i, className));
    }
    return res;
  }
  return find(document.body, className);
}

Document.prototype.myGetElementByClassName = myGetElementByClassName;
console.log(document.getElementsByClassName("any1"));
console.log(".......e...");
console.log(document.myGetElementByClassName("any1"));
