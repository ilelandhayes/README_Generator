// Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs');


// Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            name: 'projectTitle',
            type: 'input',
            message: 'What is the title of your project?',
        },
        {
            name: 'description',
            type: 'input',
            message: 'Provide a short description description of what, why, and how of your project.',
        },
        {
            name: 'installation',
            type: 'input',
            message: 'How to install README generator?',
        },
        {
            name: 'usageOf',
            type: 'input',
            message: 'How to use README generator?',
        },
        {
            name: 'contribution',
            type: 'input',
            message: 'How can others contribute to this project?',
        },
        {
            name: 'test',
            type: 'input',
            message: 'How can someone test the README Generator?',
        },{
            name: 'license',
            type: 'input',
            message: 'Which license would you like for this project?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your email?',
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is your github username?',
        },
        {
            name: 'liveLink',
            type: 'input',
            message: 'Live link to your project, if one is available?',
        },
    ])
};

// Create a function to write README file
function writeToFile(fileName, data) {
    
}

// function to initialize app
function init() {

    let markdown = '';

    questions()
    .then(data => {
        markdown = generateMarkdown(data);
    })
    .catch(err => console.log(err));
}

// Function call to initialize app
init();
