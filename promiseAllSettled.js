const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 2000);
});
const p3 = Promise.resolve(3);
const p4 = new Promise((resolve, reject) => setTimeout(reject, 100, "foo"));

const promises = [p1, p2, p3, p4];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result, result.status))
);


/*

conclusion :
- returns a promise that resolves after all of the given promises
  have either fulfilled or rejected, with an array of objects that
  each describes the outcome of each promise.

output :
Async operation 1...
Async operation 2...
{ status: 'fulfilled', value: 3 } fulfilled
{ status: 'rejected', reason: 'foo' } rejected
{ status: 'fulfilled', value: 1 } fulfilled
{ status: 'fulfilled', value: 2 } fulfilled

*/