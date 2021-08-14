//-------- Trying to do async operation in sync programming

console.log("Before")
const user = getUser(1); 
console.log(user) // undefined
const userRepo = getRepositories(user.giHubUsername);
const userCommit = getCommit(userRepo); 
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
- not working
- user return undefined
- Cannot read property 'giHubUsername' of undefined (error)

 */
