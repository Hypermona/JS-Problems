// Give a array of tasks some tasks are depends on other. your task is to print them based on thier order of execution
// this is also called as topoloical sort

const task = [
  { id: "a", dep: ["b", "c"] },
  { id: "b", dep: ["d"] },
  { id: "c", dep: ["e"] },
  { id: "d", dep: [] },
  { id: "e", dep: ["f"] },
  { id: "f", dep: [] },
];

function printTask(task = []) {
  debugger;
  const visited = new Set();
  const stack = [task[0]];
  while (stack.length) {
    let top = stack[stack.length - 1];
    if (visited.has(top.id)) {
      console.log(top.id);
      stack.pop();
      continue;
    }
    if (top?.dep?.length) {
      for (let i of top?.dep) {
        let item = task.find((t) => t.id === i);
        stack.push(item);
      }
      visited.add(top.id);
    } else {
      console.log(top.id);
      stack.pop();
    }
  }
}
console.log("hello");

printTask(task);
