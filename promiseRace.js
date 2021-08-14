const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});

Promise.race([p2, p1])
    .then(result => console.log(result))
    .catch(error => console.log(error));

/*

conclusion :
- returns a promise that fulfills or rejects as soon as 
  one of the promises in an iterable fulfills or rejects, 
  with the value or reason from that promise.

output :
Async operation 1...
1
Async operation 2...

*/