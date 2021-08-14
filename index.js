//-------- Trying to do async operation using async await

console.log("Before");


(async function () {
    const userGet = await getUser(1);
    const userRepo = await getRepositories(userGet);
    const userCommit = await getCommits(userRepo);
    console.log(userCommit);
  }
)();


console.log("After");

function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Reading a user from database...", id);
      resolve({ id: id, name: "Joe" });
    }, 2000);
  });
}

function getRepositories(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Calling GitHub API...", data);
      resolve({ ...data, repo: ["repo1", "repo2", "repo3"] });
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("GitHub Repositories...", repo);
      resolve({ ...repo, commit: ["commit"] });
    }, 2000);
  });
}

/* 

conclusion : 
- working
- async await
- can work with 3rd party async operation
- return Promise Object
- Use Semi-colon for the statement that used before IIFE
X console.log()(function(){}) // cause error

 */
