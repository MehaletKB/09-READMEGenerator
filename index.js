const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'Please select a license',
        choices: [
            'Eeny', 'Meeny', 'Miny', 'Moe',
        ],
    },
    {
        type: 'input',
        name: 'contribution',
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


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        err?console.error(err):console.log('Thank you!')});
}

function init() {
    inquirer
    .prompt(questions)
    .then((answers) =>{
        let inputString = generateMarkdown(answers);

        writeToFile("README.md", inputString)
    })
}

init();
