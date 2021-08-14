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
  
  Promise.any(promises).then((result) =>
    console.log(result)
  );

  /*

conclusion :
- returns a single promise that resolves with the
  value from that promise. If no promises in the 
  iterable fulfill (if all of the given promises are rejected), 
  then the returned promise is rejected 

output :
Support nodejs 15.0+

*/