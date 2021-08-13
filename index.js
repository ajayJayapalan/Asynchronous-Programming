//-------- Trying to do async operation in sync programming

const getUser = id => {
    
    setTimeout(() => {
      console.log("Reading a user from database...");
      return({ id: id, giHubUsername: "galala" });
    }, 2000);
  
};

const getRepositories = username => {
  
    setTimeout(() => {
      console.log("Calling GitHub API...");
      return(["repo1", "repo2", "repo3"]);
    }, 2000);
  
};

const getCommits = repo => {
  
    setTimeout(() => {
      console.log("Calling GitHub API...");
      return(["commit"]);
    }, 2000);
  
};


console.log("Before")
const user = getUser(1); 
console.log(user) // undefined
const userRepo = getRepositories(user.giHubUsername);
const userCommit = getCommit(userRepo); 
console.log("After")


/* 

conclusion : 
- user return undefined
- Cannot read property 'giHubUsername' of undefined (error)

 */
