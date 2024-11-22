const promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, "1");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "2");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "3");
});

// fullfill when all the promise fullfill,reject if any promise fails
// op: err 1
Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("all full", values);
  })
  .catch((err) => console.log("all err", err));

// fullfill when all the promise settles
//  [
//     {
//         "status": "rejected",
//         "reason": "1"
//     },
//     {
//         "status": "fulfilled",
//         "value": "2"
//     },
//     {
//         "status": "fulfilled",
//         "value": "3"
//     }
// ]
Promise.allSettled([promise1, promise2, promise3])
  .then((values) => {
    console.log("settled full", values);
  })
  .catch((err) => console.log("settled err", err));

// settles with first fullfill or rejection
//op full 2
Promise.race([promise1, promise2, promise3])
  .then((values) => {
    console.log("race full", values);
  })
  .catch((err) => console.log("race err", err));

// fullfill if any one fullfill, rejects if all rejects
// op full 2
Promise.any([promise1, promise2, promise3])
  .then((values) => {
    console.log("any full", values);
  })
  .catch((err) => console.log("any err", err));
