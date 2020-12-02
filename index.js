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
    {
        name: "projectName",
        type: "input",
        message: "What is the title of your project?",
    },
    {
        name: "email",
        type: "input",
        message: "What is your email address?",
    },
    {
        name: "description",
        type: "input",
        message: "A short description of your project?",
    },
    {
        name: "license",
        type: "list",
        message: "What kind of license should your project have:",
        choices: ["NONE", "BSD 3", "Apache 2.0"],
    },
    {
        name: "install",
        type: "input",
        message: "What command should be run to install dependencies?",
    },
    {
        name: "information",
        type: "input",
        message: "What does the user need to know about using the reop?",
    },
    {
        name: "contributing",
        type: "input",
        message: "What does user need to know about contributing to the repo?",
    }

    
])

    .then((answer) => {
        console.log(answer.license);
        // fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    })
    .catch(error => {
        if(error.isTtyError) {

        } else {

        }
    });



