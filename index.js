const inquirer = require("inquirer");
// const fs = require("fs");
// const util = require("util");
// const axios = require("axios");


inquirer.prompt([
    {
        name: "username",
        type: "input",
        message: "What is your Github username?",
    },
    {
        name: "email",
        type: "input",
        message: "What is your email address?",
    },
    
    // {
    //     name: "email",
    //     type: "input",
    //     message: "What is your email address?",
    // },

    
])

    .then((answer) => {
        console.log(answer.email);
    });



//    .then(function({ username }) {
//        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
       
//        axios.get(queryUrl).then((function(res) {
//            const repoNames = res.data.map(function(repo) {
//                return repo.name;
//            });

   
//    const repoNamesStr = repoNames.join("\n");

//       fs.writeFile("repos.txt", repoNamesStr, function(err) {
//         if (err) {
//           throw err;
//         }

//         console.log(`Saved ${repoNames.length} repos`);
//       });
    
  




// let promptuser = () => {
//     return inquirer.prompt([
//         {

//             type: "input",
//             name: 'name',
//             message: 'What is your Github username?',
//         },
//         {   name: 'email',
//             message: 'What is your email address?',
        
//     },
      
//     {       type: "input",
//             name: 'project name',
//             message: 'What is your project name?'
//     },
//         {   type: "input",    
//             name: 'licesne',
//             message: 'What kind of license should your repo have?'
//     },
//     {       type: "input",
//             name: '',
//             message: 'What command should be run to install dependancies?'
//     },
//      {      type: "input",
//             name: '',
//             message: 'What does your user need to know about using the repo?'
//      },


//      {      type: "input",
//             name: '',
//             message: 'what does your user need to know about contribution to the repo?'
//         },   
//     ]);
// };
