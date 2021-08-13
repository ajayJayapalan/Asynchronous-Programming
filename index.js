//-------- Trying to do async operation using IIFE
console.log("Before")
const id = 1;
(function(){  
    setTimeout(() => {
      console.log("Reading a user from database...",id);
      const username = "galalaa";
        (function ()  {
            setTimeout(() => {         
              console.log("Calling GitHub API...",username);
              const repo = (["repo1", "repo2", "repo3"]);
              (function(){
                setTimeout(() => {
                  console.log("GitHub Repositories...",repo);
                  return(["commit"]);
                }, 2000);        
            })()
            }, 2000);    
        })()
    }, 2000);
})();
console.log("After")


/* 

conclusion : 
- user return undefined
- Cannot read property 'giHubUsername' of undefined (error)

 */
