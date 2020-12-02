const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadme = require('./utils/generatemarkdowns')
const writeFileAsync = util.promisify(writeToFile);

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
        message: "What does the user need to know about using the repo?",
    },
    {
        name: "contributing",
        type: "input",
        message: "What does user need to know about contributing to the repo?",
    },
];

    

    // .then((answer) => {
    //     console.log(answer.license);
    //     // fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    // })

    function writeToFile (fileName, data) {
        fs.writeFile (fileName, data, 'utf8', function (err) {
            if (err) {
                console.log (err);
            }
            console.log("Please wait your readme is being composed")
        });
    }


        async function init() {
            try{
                const userResponse = await inquirer.prompt(questions);
                const markdown = generateMarkdowns(userResponse, userInfo);

                await writeFileAsync('exampleReadMe.md', markdown);
                
            } catch (error) {
                // console.log(error);
            }
        };
        init()
        // const init = new Promise(function(resolve,reject) {
        //     resolve(inquirer.prompt(question))
        // })

        // init.then(writeToFile("test.md", readme)
//     inquirer.prompt(questions).then(answer => {writeToFile('test.md', readme(answer))
// });



