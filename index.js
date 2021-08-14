//-------- Trying to do async operation using callback

console.log("Before")
getUser(1,data1 => {
    getRepositories(data1, data2 =>{
      getCommits(data2)
    })
}); 
console.log("After")

function getUser(id, cb) {  
    setTimeout(() => {
      console.log("Reading a user from database...",id);
      cb({id: id, name: "Joe",})
    }, 2000); 
};

function getRepositories(data, cb){
    setTimeout(() => {
      console.log("Calling GitHub API...",data);
      cb({...data,repo :["repo1", "repo2", "repo3"]})
    }, 2000);
};

function getCommits (repo){
    setTimeout(() => {
      console.log("GitHub Repositories...",repo);
      console.log({...repo,commit:["commit"]})
    }, 2000);
  
};


/* 

conclusion : 
- working
- callbacks, but hell
- can work with 3rd party async operation
- can't have return value in a variable

 */
