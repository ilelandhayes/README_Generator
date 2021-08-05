// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            message: 'Write a 2-3 sentence description about your project.',
        },
        {
            type: 'input',
            message: 'Installation needed for this application',
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
