const inquirer = require("inquirer");
const fs = require("fs");

const path = require("path")


const generateMarkdowns = require('./utils/generateMarkdowns.js')

  
const questions = [
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
        choices: [
        {
            name: "NONE", 
            value: "NONE"
        }, 
        { 
            name: "BSD 3",
            value: "BSD%203"
        }
        ]   
    },
    {
        name: "install",
        type: "input",
        message: "What command should be run to install dependencies?",
    },
    {
        name: "information",
        type: "input",
        message: "What does the user need to know about using the repo?",
    },
    {
        name: "contributing",
        type: "input",
        message: "What does user need to know about contributing to the repo?",
    },
];


function writeToFile (fileName, data) {
   return fs.writeFileSync(path.join(__dirname, fileName), data)
}

function init() {
    inquirer.prompt(questions).then(function(answers) {
        writeToFile("README.md", generateMarkdowns({...answers}))
    })
}
    

init()

