//-------- Trying to do async operation using promises

console.log("Before")

const getUserData = getUser(1);
getUserData.then((data)=> getRepositories(data))
   .then((data)=> getCommits(data))
   .then((data)=> console.log(data))

console.log("After")

function getUser(id) {  
    return new Promise(resolve =>{
      setTimeout(() => {
        console.log("Reading a user from database...",id);
        resolve({id: id, name: "Joe",})
      }, 2000);
    }) 
};

function getRepositories(data){
    return new Promise(resolve => {
      setTimeout(() => {
      console.log("Calling GitHub API...",data);
      resolve({...data,repo :["repo1", "repo2", "repo3"]})
    }, 2000);})
};

function getCommits (repo){
    return new Promise(resolve =>{
      setTimeout(() => {
        console.log("GitHub Repositories...",repo);
        resolve({...repo,commit:["commit"]})
      }, 2000);
    })
};


/* 

conclusion : 
- working
- promise
- can work with 3rd party async operation
- return Promise Object

 */
