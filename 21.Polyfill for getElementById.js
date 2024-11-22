function myGetElementById(id) {
  return (function search(child) {
    if (child?.id === id) {
      return child;
    }
    if (child?.children?.length) {
      for (let i in child.children) {
        let childById = search(child.children[i]);
        if (childById) {
          return childById;
        }
      }
    }
  })(document.body);
}

Document.prototype.myGetElementById = myGetElementById;

console.log(document.getElementById("box"));
console.log(document.myGetElementById("box"));
