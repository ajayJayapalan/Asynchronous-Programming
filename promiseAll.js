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

Promise.all([p2, p1])
    .then(result => console.log(result))
    .catch(error => console.log(error));
    


/*

conclusion :
- resolve only when array of promise resolved || anyone rejected first

output :
Async operation 1...
Async operation 2...
[ 2, 1 ]

*/
