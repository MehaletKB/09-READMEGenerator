// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is this project installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this project used?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license should be used?',
        choices: [
            'Eeny', 'Meeny', 'Miny', 'Moe',
        ],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are your contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How is this project tested?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your Github username',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your email address',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        err?console.error(err):console.log('Thank you!')});
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) =>{
        // console.log(answers);
        let inputString = generateMarkdown(answers);
        // console.log(inputString);

        writeToFile("README.md", inputString)
    })
}

// Function call to initialize app
init();
